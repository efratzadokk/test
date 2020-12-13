const User = require('../models/User.js');
const path = require('path');
const request = require('request');
const Card = require('../models/Card.js');
const SocialMedia = require('../models/SocialMedia.js');
const Gallery = require('../models/Gallery.js');
const ReveiwieController = require('./Reveiwies.js');
const GalleryController = require('./Gallery.js');

getDigitalCard = async (req, res) => {
    console.log("get")
    let currentUser = await User.findOne({ "uid": req.params.uId });
    User
        .findOne({ "_id": currentUser._id })
        .populate({
            path: 'cards',
            populate: [{
                path: 'socialMedias'
            }, {
                path: 'gallery',
            }, {
                path: 'reveiw'
            }
            ],
            match: { isDelete: false }
        })
        .exec((err, user) => {
            if (err) { res.status(500).send(err) }
            res.status(200).send(user.cards);
        })
}

getCardById = (req, res) => {
    Card.findOne({ _id: req.params.cardId,isDelete: false })
        .populate({
            path: "socialMedias",
        })
        .populate({
            path: 'gallery'
        })
        .populate({
            path: 'reveiw'
        })
        .exec((err, card) => {
            if (err) {
                res.status(500).send(err);
            }
            console.log("card-------------------",card)
            res.status(200).send(card);
        });
};


createDigitalCard = async (req, res) => {
    let card = req.body;
    // card.vCardStyle.cover.backgroundImage =req.body.cover!=""?"url(" +req.body.cover + ")":"";
    // card.vCardStyle.logo.backgroundImage = req.body.logo!=""?"url(" +req.body.logo+ ")":"";
    // card.vCardStyle.profile.backgroundImage =req.body.profile!=""?"url(" + +req.body.profile+ ")":"";
    try {
        let currentUser = await User.findOne({ "uid": req.params.uId });
        let socialMedias = card.socialMedias;
        const gallery = await GalleryController.saveGallery(card.gallery);
        const reveiw = await ReveiwieController.saveReveiw(card.reveiw);
        card.socialMedias = [];
        let nCard = new Card();
        console.log(nCard._id)
        let currentCard = new Card(card);
        currentCard.user = currentUser._id;
        currentCard._id = nCard._id;
        currentUser.cards.push(currentCard._id);
        currentCard.gallery = gallery;
        currentCard.reveiw = reveiw;
        currentCard.socialMedias = [];
        socialMedias.forEach(async (socialMedia, index) => {
            let nCurrentSocialMedia = new SocialMedia();
            let currentSocialMedia = new SocialMedia(socialMedia);
            currentSocialMedia._id = nCurrentSocialMedia._id;
            currentSocialMedia.card = currentCard._id
            await currentSocialMedia.save().then((socialMedia) => {
                currentCard.socialMedias.push(socialMedia);
            });
            if (index == socialMedias.length - 1) {
                await currentCard.save();
            }
        });
        let result = await currentUser.save();
        return res.send(currentCard);
    } catch (error) {
        res.send(error)

    }
}


updateDigitalCard = async(req, res) => {
    let card = req.body;
    console.log("updatenew__________",card)
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
             console.log("_id ,gallery start",req.params.cardId,currentCard)
            const gallery = await GalleryController.updateGallery(card.gallery);
            const review = await ReveiwieController.updateReveiw(card.reveiw);
            console.log("gallery end")

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
            console.log("start")
            console.log("currentcard",currentCard)
            currentCard.gallery = gallery;
            console.log("currentcardEnd",currentCard.gallery)
            currentCard.reveiw = review;
            currentCard.socialMedias = socialMedias;
            res.status(200).send(currentCard);
        }
    );
    // let c=await Card.findOne({ "_id": req.params.cardId })
};


deleteCard = async (req, res) => {
    let card = req.body;
    try {
        let currentCard = await Card.findOne({ _id: req.params.cardId });
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
    if (user)
        res.json({ "uid": user.uid })
};

sendMessageByCard = async (req, res) => {
    const { body, mailTo } = req.body;
    var email = {}
    email = {
        to: mailTo,
        from: "noreply@leader.codes",
        subject: "From knowme.page",
        html: body
    }

    const options = {
        url: 'https://api.leader.codes/mail/sendEmail',
        method: 'POST',
        headers: { Authorization: req.headers["authorization"] },
        json: email,
        // "data": JSON.stringify({"json": JSON.stringify(email) }),

    };

    request(options, (error, res1, body) => {
        console.log("arrive$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");

        if (error) {
            console.log("error$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
            return
            console.error(error)
        }
        else
            console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&&&&");
        res.status(200).json({ message: 'sent' })
    })

}






module.exports = {
    createDigitalCard,
    updateDigitalCard,
    getDigitalCard,
    getCardById,
    deleteCard,
    getUidByUserName,
    sendMessageByCard
}