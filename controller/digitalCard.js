const User = require('../models/User.js');
const path = require('path');
const request = require('request');
const Card = require('../models/Card.js');
const Lead = require('../models/Leads.js');
const Statistic = require('../models/Statistics');
const ReveiwieController = require('./Reveiwies.js');
const GalleryController = require('./Gallery.js');
const SocialMediaController = require('./socialMedias');
const LeadController = require('./lead')
const StatisticController = require('./statistic')
const requestIp = require('request-ip');
const geoip = require('geoip-lite');
const os = require('os');
const UAParser = require('ua-parser-js');
const DeviceDetector = require("device-detector-js");
const { AsyncLocalStorage } = require('async_hooks');



createDigitalCard = async (req, res) => {
    try {
        let card = await new Card(req.body)
        let statistic = await new Statistic(req.body.statistic)
        statistic.idCard = card._id
        await statistic.save()
        let lead = await new Lead(req.body.lead)
        lead.idCard = card._id
        await lead.save()

        card.user = await User.findOne({ "username": req.params.userName })

        card.statistic = statistic;
        card.lead = lead;
        card.socialMedia = await SocialMediaController.saveSocialMedias(req.body.socialMedia);
        card.galleryList = await GalleryController.saveGallerys(req.body.galleryList);
        card.reviewsList = await ReveiwieController.saveReveiws(req.body.reviewsList);

        card.socialMedia.idCard = card._id
        card.galleryList.idCard = card._id
        card.reviewsList.idCard = card._id
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


updateDigitalCard = async (req, res) => {

    let card = req.body;

    card.socialMedia = await SocialMediaController.updateSocialMedia(card.socialMedia)
    card.galleryList = await GalleryController.updateGallery(card.galleryList)
    card.reviewsList = await ReveiwieController.updateReveiw(card.reviewsList)
    card.lead = await LeadController.updateLead(card.lead)

    Card.findByIdAndUpdate(
        { _id: req.params.cardId },
        card,
        { new: true },
        (err, currentCard) => {
            if (err) {
                console.log(err);
                res.send(err);
            }
            res.status(200).json(card);
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

        //copy card
        let card = await new Card()
        let newCard = await new Card(cardToCopy)
        newCard._id = card._id

        //create new statistic
        let newStatistic = await new Statistic()
        newCard.statistic = newStatistic;
        await newStatistic.save();

        //copy lead
        let lead = await new Lead()
        let newLead = await new Lead(cardToCopy.lead)
        newLead._id = lead._id
        newCard.lead = newLead;
        await newLead.save();


        newCard.socialMedia = await SocialMediaController.saveSocialMedias(cardToCopy.socialMedia);
        newCard.galleryList = await GalleryController.saveGallerys(cardToCopy.galleryList);
        newCard.reviewsList = await ReveiwieController.saveReveiws(cardToCopy.reviewsList);

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
    try {
        let card = await Card.findOne({ cardName: cardName, isDelete: false })
        if (card && card._id != id) {
            return res.send(false)
        }

        res.send(true);
    } catch (err) {
        res.send(err);
    }
}

editCardName = async (req, res) => {

    let cardId = req.body.cardId;
    let cardName = req.body.cardName;
    const filter = { _id: cardId };
    const update = { cardName: cardName };
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


sumEmailSend = async (cardName) => {
    return new Promise(async (resolve, reject) => {
        const card = await Card.findOne({ cardName: cardName })
        let statistic = await Statistic.findOne({ idCard: card._id })
        statistic.emailCnt++;
        await statistic.save()
        if (statistic)
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
    await sumEmailSend(req.params.cardName)

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
                populate: [
                    { path: 'user' },
                    { path: 'socialMedia' },
                    { path: 'galleryList' },
                    { path: 'reviewsList' },
                    { path: 'lead' },
                    { path: 'statistic' }
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
newActivIP = async (req) => {
    const { cardName } = req.params;
    // const clientIp = requestIp.getClientIp(req);
    const clientIp = "207.97.227.239";
    let geo = geoip.lookup(clientIp);
    let parser1 = new UAParser();
    let ua = req.headers['user-agent'];
    let deviceDetector = new DeviceDetector();
    let userAgent = ua
    let browserName = parser1.setUA(ua).getBrowser().name;
    let operationType = os.type()
    let device = deviceDetector.parse(userAgent).device.type;
    let card = await Card.findOne({ cardName: cardName, isDelete: false })
    let statistic = await Statistic.findOne({ idCard: card._id })
    statistic.viewsCnt += 1;
    statistic.activeViewer += 1;
    let country = await statistic.actives.country.find(item => item.name == geo.country)
    if (country) {
        country.sum++;
        country.dates.push(new Date())
    } else {
        let obj = { name: geo.country, sum: 1, dates: new Date() }
        statistic.actives.country.push(obj)
    }

    let browser = await statistic.actives.browser.find(item => item.name == browserName)
    if (browser) {
        browser.sum++;
        browser.dates.push(new Date())
    } else {
        let obj = { name: browserName, sum: 1, dates: new Date() }
        statistic.actives.browser.push(obj)
    }
    let operation = await statistic.actives.operationType.find(item => item.name == operationType)
    if (operation) {
        operation.sum++;
        operation.dates.push(new Date())
    } else {
        let obj = { name: operationType, sum: 1, dates: new Date() }
        statistic.actives.operationType.push(obj)
    }
    let dvices = await statistic.actives.dvices.find(item => item.name == device)
    if (dvices) {
        dvices.sum++;
        dvices.dates.push(new Date())
    } else {
        let obj = { name: device, sum: 1, dates: new Date() }
        statistic.actives.dvices.push(obj)
    }
    return new Promise(async (resolve, reject) => {

        if (!statistic.actives) reject("not active");
        let savedStatistic = await statistic.save()
        console.log(savedStatistic);
        resolve(savedStatistic.country);

    });
}
getCardByName = async (req) => {
    const { cardName } = req.params;
    await newActivIP(req)

    return new Promise((resolve, reject) => {
        Card.findOne({
            cardName: cardName,
            isDelete: false
        }).populate({ path: "user" })
            .populate({ path: "socialMedia" })
            .populate({ path: 'galleryList' })
            .populate({ path: 'reviewsList' })
            .populate({ path: 'lead' })
            .populate({ path: 'statistic', })
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


