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
const requestIp = require('request-ip');
const geoip = require('geoip-lite');
const UAParser = require('ua-parser-js');
const DeviceDetector = require("device-detector-js");

createDigitalCard = async (req, res) => {
    try {
        let card = await new Card(req.body)
        let statistic = await new Statistic(req.body.statistic)
        statistic.cardName = card.cardName
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
    card.socialMedia = await
        SocialMediaController.updateSocialMedia(card.socialMedia)
    card.galleryList = await GalleryController.updateGallery(card.galleryList)
    card.reviewsList = await ReveiwieController.updateReveiw(card.reviewsList)
    card.lead = await LeadController.updateLead(card.lead)
    let statistic = await Statistic.findByIdAndUpdate(card.statistic, { isDelete: true }, { new: true });
    console.log('-------', statistic);
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
        newStatistic.idCard = card;
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
        const card = await Card.findOne({ cardName: cardName, isDelete: false })
        let statistic = await Statistic.findOne({ idCard: card._id })
        statistic.emailCnt++;
        await statistic.save()
        if (statistic)
            resolve("access denied");
        reject('access denied');
    });
}

createContactLeaderBox = async (data) => {
    const { body, mailTo } = data;
    const email = {
        source: "Know me",
        subject: "Form Knowme🙂",
        from: "knowme@noreply.leader.codes",
        to: mailTo,
        body: body,
        files: null
    }
    const options = {
        url: `https://api.dev.leader.codes/${'rivkaf'}/createSystemWave`,
        method: 'POST',
        headers: {
            Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJtVjhWM2V2c2NQUFJGcDZNNkZ4eWlIQ1JrdkczIiwiZW1haWwiOiJyaXZrYWZvZ2VsbWFuQGdtYWlsLmNvbSIsImlhdCI6MTYyMDczMjgyNH0.v1j1_lIcenKPHNvHXaOlfBhYNH3YU12nAB71nQ_Vrd4"
        },
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

sendMessageByCard = async (mailTo,body,username,req) => {

    console.log("body__________", body);
    console.log("mailTo__________", mailTo);
    console.log("username__________", username);
    await createContactLeaderBox(req.body);
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
    });

}
sendMessageByCardMultiEmails = (req, res) =>{
    const { listMail, body,username } = req.body;
    console.log("listMail___________", listMail);
    return new Promise(async (resolve, reject) => {
    console.log("inside listMail !")
    try {
        Promise.all(
            listMail.map(async (mail) => {
                console.log("mail"+mail)
           let splitMail=mail.split('@');
           let aa=splitMail[0];
                sendMessageByCard(mail,body,aa,req)
            })).then(() => {
                resolve(true)
            })

    } catch (error) {
        console.log("reveiw errore: -", error)
        reject(error);
    }
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
activData = (statisticActiv, value) => {
    return new Promise(async (resolve, reject) => {
        let active = await statisticActiv.find(item => item.name == value)
        if (active) {
            active.sum++;
            active.dates.push(new Date())
        } else {
            let obj = { name: value, sum: 1, dates: new Date() }
            statisticActiv.push(obj)
        }
        if (!value)
            reject("not active");
        resolve(active);
    })
}
newActivIP = async (req) => {
    const { cardName } = req.params;
    return new Promise(async (resolve, reject) => {
        try {
            // const clientIp = requestIp.getClientIp(req);
            const clientIp = "84.95.241.10";
            // const clientIp1 = req.headers['x-forwarded-for'] ||
            //     req.socket.remoteAddress ||
            //     null;
            let geo = geoip.lookup(clientIp);
            let country = geo.country == 'IL' ? 'IS' : geo.country
            let parser1 = new UAParser();
            let userAgent = req.headers['user-agent'];
            let deviceDetector = new DeviceDetector();
            let browserName = parser1.setUA(userAgent).getBrowser().name;
            let operationType = parser1.setUA(userAgent).getOS().name;
            let device = deviceDetector.parse(userAgent).device.type;
            let card = await Card.findOne({ cardName: cardName, isDelete: false })
            if (card) {
                let statistic = await Statistic.findById(card.statistic)
                if (statistic.viewsCnt == 0) {
                    statistic.dateCreated = new Date()
                }
                statistic.viewsCnt += 1;
                statistic.activeViewer += 1;
                statistic.allDatesViews.push(new Date())
                await activData(statistic.actives.country, country)
                await activData(statistic.actives.browser, browserName)
                await activData(statistic.actives.operationType, operationType)
                await activData(statistic.actives.dvices, device)
                if (!statistic.actives)
                    reject("not active");
                let savedStatistic = await statistic.save()
                resolve(savedStatistic);
            }
            else
                resolve(null);
        }
        catch (err) {
            console.log(err.message);
        }

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
            .exec(async (err, card) => {
                if (err) {
                    reject(err);
                }
                // await newActivIP(card.statistic)
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
    sendMessageByCardMultiEmails,
    editCardName,
    getCardsIndex,
    getCardByName,
    getAllCards,
    copyCard
}



