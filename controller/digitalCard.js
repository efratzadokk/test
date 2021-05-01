const User = require('../models/User.js');
const path = require('path');
const request = require('request');
const Card = require('../models/Card.js');
const SocialMedia = require('../models/SocialMedia.js');
const Gallery = require('../models/Gallery.js');
const Statistic = require('../models/Statistics.js');
const Lead = require('../models/Leads.js');
const Reveiw = require('../models/Reveiw');
const ReveiwieController = require('./Reveiwies.js');
const GalleryController = require('./Gallery.js');
const SocialMediaController = require('./socialMedias');
const IframeController = require('./Iframe.js');
const nodemailer = require('nodemailer');

getDigitalCard = async (req, res) => {
    console.log("userName--------------", req.params.userName);

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

newActivIP = (req) => {
    return new Promise((resolve, reject) => {
        const clientIp = requestIp.getClientIp(req);
        let geo = geoip.lookup(clientIp);
        let parser1 = new UAParser();
        let ua = req.headers['user-agent'];
        let browserName = parser1.setUA(ua).getBrowser().name;
        let deviceType = os.type()
        const active = {
            country: geo.country,
            ip: clientIp,
            deviceType: deviceType,
            browser: browserName,
            languageBrowser: req.headers["accept-language"]
        }
        if (!active) reject("not active");
        resolve(active);
    });
}



createDigitalCard = async (req, res) => {
    try {
        let card = await new Card(req.body)
        let statistic = await new Statistic(req.body.statistic)
        let lead = await new Lead(req.body.lead)
        card.user = await User.findOne({ "username": req.params.userName })
        card.statistic = statistic;
        card.lead = lead;
        card.socialMedia = await SocialMediaController.saveSocialMedias(req.body.socialMedia);
        card.gallery = await GalleryController.saveGallerys(req.body.gallery);
        card.reviews = await ReveiwieController.saveReveiws(req.body.reviews);

        card.save(async (err, cardAfterSave) => {
            console.log("card-----", cardAfterSave);
            if (err)
                return res.send(err)
            await User.findOneAndUpdate(
                { "username": req.params.userName },
                { $push: { cards: cardAfterSave._id } },
                { new: true }
            )
            return res.status(200).json(cardAfterSave)
        })
    }
    catch (error) {
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




//by card name only
checkUniqueCardName = async (req, res) => {
    let cardName = req.body.cardname;
    let id = req.body.id;

    let card = await Card.findOne({ "cardName.title": cardName, isDelete: false })

    console.log("id", id);


    if (card && card._id != id) {
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

getCardsIndex = (req, res) => {

    Card.countDocuments({}, (err, count) => {
        if (err) {
            res.status(500).send(err);
        }
        console.log("count", count)
        res.status(200).send({ count: count });
    })

}


sumEmailSend = async (username) => {
    return new Promise(async (resolve, reject) => {
        const card = await Card.find({ cardName: username })
        const statisticEmail = await Statistic.findOneAndUpdate({ idCard: card._id },
            { $inc: { 'emailCnt': 1 } },
            { new: true })
        if (statisticEmail)
            resolve("access denied");
        reject('access denied');
    });
}

createContactLeaderBox = async (data) => {
    const { body, mailTo, username } = data;
    const email = {
        source: "KnowMe",
        subject: "Form Knowme🙂",
        from: "knowme@noreply.leader.codes",
        to: mailTo,
        body: body,
        files: null
    }
    const options = {
        url: `https://api.dev.leader.codes/${username}/createSystemWave`,
        method: 'POST',
        headers: { Authorization: "secretKEY@2021" },
        json: email,
    };
    return new Promise((resolve, reject) => {
        request(options, (error, res) => {
            if (error) {
                reject(error);
            }
            resolve(res);
        });
    });
}

sendMessageByCard = async (req, res) => {
    const { body, mailTo, username } = req.body;
    console.log("body__________", body);
    console.log("mailTo__________", mailTo);
    console.log("username__________", username);
    await sumEmailSend(username)
    const email = {
        from: `${username}@mails.codes`,
        to: mailTo,//emailTo
        subject: "Knowme",
        html: body

    }
    const options = {
        url: 'https://mails.codes/mail/sendEmail',
        method: 'POST',
        headers: { Authorization: "secretKEY@2021" },
        json: email,
    };
    return new Promise((resolve, reject) => {
        request(options, (error, res, body) => {
            if (error) {
                console.error("error:" + error);
                reject(error);
            }

            console.log(`statusCode: ${res.statusCode}`);
            console.log(body);
            resolve('sent');

        });
        res.send(true);
    });

}

getAllCards = (userName) => {

    return new Promise((resolve, reject) => {
        User.find({ userName: userName })
            .populate({ path: "cards" })
            .exec((err, cards) => {
                if (err) {
                    reject(err);
                }
                resolve(cards)
            })

    });
}

getCardByName = async (req) => {

    const { cardName } = req.params;
    // const newActive = await newActivIP(req)

    return new Promise((resolve, reject) => {
        Card.findOne({ "cardName.title": cardName, isDelete: false })
            .populate({ path: "user" })
            .populate({ path: "socialMedia" })
            .populate({ path: 'gallery' })
            .populate({ path: 'reviews' })
            .populate({ path: 'lead' })
            // .populate({
            //     path: 'statistic',
            //     match: {
            //         $inc: { 'viewsCnt': 1 },
            //         $push: { actives: newActive }
            //     }
            // })
            .exec((err, card) => {
                if (err) {
                    reject(err);
                }
                console.log("card-------------------", card)

                resolve(card)

            })
    });
}

module.exports = {
    createDigitalCard,
    updateDigitalCard,
    getDigitalCard,
    deleteCard,
    getUidByUserName,
    sendMessageByCard,
    checkUniqueCardName,
    addContactOptions,
    editCardName,
    getCardsIndex,
    getCardByName
}


