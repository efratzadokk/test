const User = require('../models/User.js');
const path = require('path');
const request = require('request');
const Card = require('../models/Card.js');
const SocialMedia = require('../models/SocialMedia.js');
const Gallery = require('../models/Gallery.js');
const ReveiwieController = require('./Reveiwies.js');
const GalleryController = require('./Gallery.js');
const VideoController = require('./Video.js');
const IframeController = require('./Iframe.js');
const nodemailer = require('nodemailer');

getDigitalCard = async (req, res) => {
    console.log("get")
    let currentUser = await User.findOne({ "username": req.params.userName });
    User.findOne({ "_id": currentUser._id })
        .populate({
            path: 'cards',
            populate: [{
                path: 'socialMedias'
            }, {
                path: 'gallery',
            }, {
                path: 'reveiw'
            },
            {
                path: 'video'
            },
            {
                path: 'iframe'
            }
            ],
            match: { isDelete: false }
        })
        .exec((err, user) => {
            if (err) { res.status(500).send(err) }
            res.status(200).send(user.cards);
        })
}

getCardById = async (req, res) => {

    let cardName=req.params.cardName;
    // let cardId=req.params.cardId;
    console.log("cardName", cardName)
    console.log("userName", req.params.userName)

    if (req.query.view) {
        let query = { cardName: cardName, "viewers.date": generateDate(new Date()) };
        let inc = { $inc: { 'viewers.$.amount': 1 } };
        let currentCard = await Card.findOne(query);
        let success;
        if (currentCard) { success = await Card.updateOne(query, inc); }
        else {
            let newDay = { date: generateDate(new Date()), amount: 1 }
            console.log("newDay", newDay);
            
            success = await Card.findOneAndUpdate({ cardName: cardName },
                { $push: { viewers: newDay } },
                { new: true, upsert: true })
        }
    }


    // Card.find({ cardName: cardName, isDelete: false })
    //     .populate({ path: 'userId', match: { username: req.params.userName } })
    //     .populate({ path: "socialMedias" })
    //     .populate({ path: 'gallery' })
    //     .populate({ path: 'reveiw' })
    //     .populate({ path: 'video' })
    //     .populate({ path: 'iframe' })
    //     .exec((err, cards) => {
    //         if (err) {
    //             res.status(500).send(err);
    //         }
    //         let data = null;
    //         cards.forEach(card => {
    //             if (card.userId != null) {
    //                 data = card;;
    //             }
    //         });
    //         console.log("card-------------------", data)
    //         res.status(200).send(data);

    //     });

    Card.findOne({ cardName: cardName, isDelete: false })
    .populate({ path: "socialMedias" })
    .populate({ path: 'gallery' })
    .populate({ path: 'reveiw' })
    .populate({ path: 'video' })
    .populate({ path: 'iframe' })
    .exec((err, card) => {
        if (err) {
            res.status(500).send(err);
        }  
        console.log("card-------------------", card)
       
        res.status(200).send(card);

    });
}


createDigitalCard = async (req, res) => {
    console.log("createDigitalCard")
    let card = req.body;
    try {
        let currentUser = await User.findOne({ "username": req.params.userName })
            .populate({
                path: "cards",
                match: {
                    $or: [{ 'cardName': card.cardName }, { 'cardName': { '$regex': `${card.cardName}-copy`, '$options': 'i' } }],
                    isDelete: false
                }
            });

        let socialMedias = card.socialMedias;
        const gallery = await GalleryController.saveGallery(card.gallery);
        const reveiw = await ReveiwieController.saveReveiw(card.reveiw);
        const video = await VideoController.saveVideo(card.video);
        const iframe = await IframeController.saveIframe(card.iframe);
       
        card.socialMedias = [];

        let nCard = new Card();
        let currentCard = new Card(card);
        console.log(currentCard, "userId: ", currentUser._id)
        currentCard.userId = currentUser._id;
        currentCard._id = nCard._id;


        if (currentUser.cards.length > 0) {
            currentCard.cardName = currentCard.cardName.concat("-copy").concat(currentUser.cards.length);
        }

        currentUser.cards.push(currentCard._id);
        currentCard.gallery = gallery;
        currentCard.reveiw = reveiw;
        currentCard.video = video;
        currentCard.iframe = iframe;
        currentCard.socialMedias = [];

        await Promise.all(socialMedias.map(async (socialMedia, index) => {
            let nCurrentSocialMedia = new SocialMedia();
            let currentSocialMedia = new SocialMedia(socialMedia);
            currentSocialMedia._id = nCurrentSocialMedia._id;
            currentSocialMedia.card = currentCard._id
            currentCard.socialMedias.push(currentSocialMedia);
            currentSocialMedia.save()


        })).then(() => {
            console.log("after save out of loop");
            currentCard.save();
        });
        let result = await currentUser.save();
        return res.send(currentCard);
    } catch (error) {
        console.log("error", error)
        res.send(error)

    }
}

updateDigitalCard = async (req, res) => {
    let card = req.body;
    let socialMedias = card.socialMedias ? card.socialMedias : [];
    delete card.socialMedias;
    delete card._id;
    Card.findByIdAndUpdate(
        { _id: req.params.cardId },
        card,
        { new: true },
        async (err, currentCard) => {
            if (err) {
                console.log(err);
                res.send(err);
            }
            const gallery = await GalleryController.updateGallery(card.gallery);
            const review = await ReveiwieController.updateReveiw(card.reveiw);
            const video = await VideoController.updateVideo(card.video);
            const iframe = await IframeController.updateIframe(card.iframe);

            socialMedias.forEach((sMedia, index) => {
                let socialMedia = SocialMedia.findByIdAndUpdate(
                    sMedia._id,
                    sMedia,
                    { new: true },
                    (err, media) => {
                        if (err) {
                            console.log(err);
                            return res.status(500).send(err);
                        }
                    }

                );
            });
            currentCard.gallery = gallery;
            currentCard.reveiw = review;
            currentCard.video = video;
            currentCard.iframe = iframe;
            currentCard.socialMedias = socialMedias;
            res.status(200).send(currentCard);
        }
    );
};

deleteCard = async (req, res) => {
    let card = req.body;
    try {

        let currentCard = await Card.findOne({ _id: req.params.cardId });
        console.log({ _id: req.params.cardId });
        currentCard.isDelete = true;
        let result = await currentCard.save();
        res.send(result);
    } catch (error) {
        res.send(error)
    }
}


getUidByUserName = async (req, res) => {
    const userName = req.params.userName
    const user = await User.findOne({ username: userName })
    console.log("user email", user.email);
    let query = { _id: req.params.cardId, "viewers.date": generateDate(new Date()) };
    let inc = { $inc: { 'viewers.$.amount': 1 } };
    let currentCard = await Card.findOne(query);
    let success;
    console.log('currentCard', currentCard._id);
    if (currentCard) { success = await Card.updateOne(query, inc); }
    else {
        let newDay = { date: generateDate(new Date()), amount: 1 }
        console.log("newDay", newDay);
        success = await Card.findOneAndUpdate({ _id: req.params.cardId }, { $push: { viewers: newDay } }, { new: true, upsert: true })
    }
    console.log(success);
    if (user)
        res.json({ "uid": user.uid })
};


sendMessageByCard = async (req, res) => {

    const { body, mailTo } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'knowme.page@gmail.com',
            pass: 'knowmeteema315292482',
            type: "login",
        }
    });

    const mailOptions = {
        from: {
            name: 'no-replay',
            address: 'knowme.page@gmail.com',
        },
        to: mailTo,
        subject: 'no-replay',
        html: body
    };


    transporter.sendMail(mailOptions, async function (error, info) {

        let query = { cardName: req.params.cardName, "submitioms.date": generateDate(new Date()) };
        let inc = { $inc: { 'submitioms.$.amount': 1 } };
        let currentCard = await Card.findOne(query);
        let success;
        console.log('currentCard', currentCard);
        if (currentCard) { success = await Card.updateOne(query, inc); }
        else {
            let newDay = { date: generateDate(new Date()), amount: 1 }
            console.log("newDay", newDay);
            success = await Card.findOneAndUpdate({ cardName: req.params.cardName }, { $push: { submitioms: newDay } }, { new: true, upsert: true })
        }
        if (error) {
            console.log(error);
            res.send(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.send();

        }
    });

}


addContactOptions = async (req, res) => {
    try {
        let { name } = req.body;
        let query = { _id: req.params.cardId, "contactOptions.date": generateDate(new Date()) };
        let update;
        console.log(query);
        let card = await Card.findOne(query)
        console.log("---card---", card);
        let summaryToday;
        if (card) {
            summaryToday = JSON.parse(card.contactOptions[card.contactOptions.length - 1].sumContactOptions)
            if (summaryToday[name]) {
                summaryToday[name]++;

            } else {
                summaryToday[name] = 1;
            }
            console.log('summaryToday', summaryToday);
            update = { $set: { 'contactOptions.$.sumContactOptions': JSON.stringify(summaryToday) } };
            success = await Card.updateOne(query, update, { new: true });
        }
        else {
            newDay = { date: generateDate(new Date()), sumContactOptions: JSON.stringify({ [name]: 1 }) }
            await Card.findOneAndUpdate({ _id: req.params.cardId }, { $push: { contactOptions: newDay } })
        }
        res.status(200).send("update successfully")
    } catch (error) {
        res.status(500).send(error)
    }

}
generateDate = (date) => {
    return ("0" + date.getDate()).slice(-2) + "/" + ("0" + (date.getMonth() + 1)).slice(-2) + "/" + date.getFullYear()
}

//by card name and username

// checkUniqueCardName = async (req, res) => {
//     let userName = req.body.userName;
//     let cardName = req.body.cardname;
//     let currentUser = await User.findOne({ "username": userName })
//     let _id = currentUser._id
//     console.log(_id)
//     let user = await User.findOne({ "username": req.params.userName })
//         .populate({ path: 'cards', match: { cardName: cardName, isDelete: false, } });
//     if (user.cards.length > 0) {
//         return res.send(false)
//     }
//     else {
//         res.send(true);
//     }

// }


//by card name only
checkUniqueCardName = async (req, res) => {
    let cardName = req.body.cardname;
    let id=req.body.id;

    let card = await Card.findOne({"cardName": cardName,isDelete:false })

    console.log("id",id);
    
        
    if (card && card._id!=id) {
        console.log("+++++")
        return res.send(false)
    }
    res.send(true);

}
 
editCardName = async (req, res) => {

    let cardId = req.body.cardId;
    let cardName = req.body.cardName;

    console.log("req.body.cardname", cardName);
    console.log("req.body.cardId", cardId);

    const filter = { _id: cardId };
    const update = { cardName: cardName };

    let doc = await Card.findOneAndUpdate(filter, update);

    res.send();

}

getCardsIndex=(req, res)=>{

    Card.countDocuments({},(err,count)=>{
        if(err){
            res.status(500).send(err);
        } 
        console.log("count",count)
        res.status(200).send({count:count});
    })

}


module.exports = {
    createDigitalCard,
    updateDigitalCard,
    getDigitalCard,
    getCardById,
    deleteCard,
    getUidByUserName,
    sendMessageByCard,
    checkUniqueCardName,
    addContactOptions,
    editCardName,
    getCardsIndex
}


// sendMessageByCard = async (req, res) => {
//     const { body, mailTo } = req.body;
//     var email = {}
//     email = {
//         to: mailTo,
//         from: "noreply@leader.codes",
//         subject: "From knowme.page",
//         html: body
//     }

//     const options = {
//         url: 'https://api.leader.codes/mail/sendEmail',
//         method: 'POST',
//         headers: { Authorization: req.headers["authorization"] },
//         json: email,
//         // "data": JSON.stringify({"json": JSON.stringify(email) }),

//     };

//     request(options, async (error, res1, body) => {
//         if (error || res.statusCode != 200) {
//             console.log("error", error);
//             return
//             res.status(500).send(error)
//             console.error(error)
//         }
//         else {
//             console.log('cardId', req.params.cardId);
//             let query = { _id: req.params.cardId, "submitioms.date": generateDate(new Date()) };
//             let inc = { $inc: { 'submitioms.$.amount': 1 } };
//             let currentCard = await Card.findOne(query);
//             let success;
//             console.log('currentCard', currentCard);
//             if (currentCard) { success = await Card.updateOne(query, inc); }
//             else {
//                 let newDay = { date: generateDate(new Date()), amount: 1 }
//                 console.log("newDay", newDay);
//                 success = await Card.findOneAndUpdate({ _id: req.params.cardId }, { $push: { submitioms: newDay } }, { new: true, upsert: true })
//             }
//             console.log(success);
//             res.status(200).json({ message: 'sent' })
//         }
//     })


// }
