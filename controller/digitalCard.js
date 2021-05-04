const User = require('../models/User.js');
const path = require('path');
const request = require('request');
const Card = require('../models/Card.js');
const Statistic = require('../models/Statistics.js');
const Lead = require('../models/Leads.js');
const ReveiwieController = require('./Reveiwies.js');
const GalleryController = require('./Gallery.js');
const SocialMediaController = require('./socialMedias');
const LeadController = require('./lead')
const StatisticController = require('./statistic')
const requestIp = require('request-ip');



createDigitalCard = async (req, res) => {
    console.log("///", req.body);
    try {
        let card = await new Card(req.body)
        let statistic = await new Statistic(req.body.statistic)
        let lead = await new Lead(req.body.lead)
        card.user = await User.findOne({ "username": req.params.userName })
        card.statistic = statistic;
        card.lead = lead;
        card.socialMedia = await SocialMediaController.saveSocialMedias(req.body.socialMedia);
        card.galleryList = await GalleryController.saveGallerys(req.body.galleryList);
        card.reviewsList = await ReveiwieController.saveReveiws(req.body.reviewsList);

        card.save(async (err, cardAfterSave) => {
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

updateDigitalCard = async (req, res) => {

    let card = req.body;
    //await SocialMediaController.updateSocialMedia(req.body.socialMedia)
    //await GalleryController.updateGallery(req.body.galleryList)
    //card.reviewsList=await ReveiwieController.updateReveiw(req.body.reviewsList)
    await StatisticController.updateStatistic(req.body.statistic)
    await LeadController.updateLead(req.body.lead)
    Card.findByIdAndUpdate(
        { _id: req.params.cardId },
        card,
        { new: true },
        (err, currentCard) => {
            if (err) {
                console.log(err);
                res.send(err);
            }
            res.status(200).json(currentCard);
        }
    );
};

deleteCard = async (req, res) => {
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

copyCard = async (req, res) => {

    const cardToCopy = req.body;
    const userName = req.params.userName;

    try {
        let card = await new Card()
        let newCard = await new Card(cardToCopy)
        let statistic = await new Statistic()
        let newStatistic = await new Statistic(cardToCopy.statistic)
        let lead = await new Lead()
        let newLead = await new Lead(cardToCopy.lead)

        newCard._id = card._id
        newCard.statistic = newStatistic;
        newStatistic._id = statistic._id
        newLead._id = lead._id
        newCard.lead = newLead;
        newCard.socialMedia = await SocialMediaController.saveSocialMedias(cardToCopy.socialMedia);
        newCard.galleryList = await GalleryController.saveGallerys(cardToCopy.galleryList);
        newCard.reviewsList = await ReveiwieController.saveReveiws(cardToCopy.reviewsList);

        await newStatistic.save();
        await newLead.save();

        newCard.save(async (err, cardAfterSave) => {
            console.log("card-----", cardAfterSave);
            if (err)
                return res.send(err)
            await User.findOneAndUpdate(
                { "username": userName },
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


//by card name only
checkUniqueCardName = async (req, res) => {
    let cardName = req.body.cardname;
    let id = req.body.id;

    let card = await Card.findOne({ "cardName.title": cardName, isDelete: false })
    if (card && card._id != id) {
        console.log("+++++")
        return res.send(false)
    }
    res.send(true);
}

editCardName = async (req, res) => {

    let cardId = req.body.cardId;
    let cardName = req.body.cardName;
    const filter = { _id: cardId };
    const update = { "cardName.title": cardName };
    let doc = await Card.findOneAndUpdate(filter, update);
    res.send(doc);

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
            resolve(true);

        });
        res.send(true);
    });

}

getAllCards = (userName) => {

    return new Promise((resolve, reject) => {
        console.log("username", userName)
        User.findOne({ username: userName })
            .populate({
                path: "cards",
                populate: [{
                    path: 'user'
                },
                {
                    path: 'socialMedia',
                },
                {
                    path: 'galleryList'
                },
                {
                    path: 'reviewsList'
                },
                {
                    path: 'lead'
                }
                ],
                match: { isDelete: false }
            })
            .exec((err, user) => {
                if (err) {
                    reject(err);
                }
                resolve(user.cards)
            })
    });
}

getCardByName = async (req) => {

    const { cardName } = req.params;
    // const newActive = await newActivIP(req)

    return new Promise((resolve, reject) => {
        Card.findOne({
            "cardName.title": cardName,
            isDelete: false
        }).populate({ path: "user" })
            .populate({ path: "socialMedia" })
            .populate({ path: 'galleryList' })
            .populate({ path: 'reviewsList' })
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
    deleteCard,
    sendMessageByCard,
    checkUniqueCardName,
    editCardName,
    getCardsIndex,
    getCardByName,
    getAllCards,
    copyCard
}


