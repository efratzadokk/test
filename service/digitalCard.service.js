const Statistic = require('../models/Statistics');
const Lead = require('../models/Leads.js');
const mongoose = require("mongoose");
const Card = mongoose.model('Card')
const User = require('../models/User.js');

const path = require('path');
const geoip = require('geoip-lite');
const UAParser = require('ua-parser-js');
const DeviceDetector = require("device-detector-js");
const { resolve } = require('path');

const repository = require('../repository/repository')

const socialMediasService = require('./socialMedias.service')
const reviewService = require('./review.service')
const galleryService=require('./gallery.service')
const leadService=require('./lead.service');
const { connected } = require('process');

let createDigitalCard = (cardData,userName) => {
    return new Promise(async (resolve, reject) => {
        try {
            let card = new Card(cardData)
            let statistic=await repository.createObject(Statistic,cardData.statistic)       
            statistic.cardName = card.cardName
            statistic.idCard = card._id
            await repository.saveObject(statistic)
            console.log(statistic)

            let lead = new Lead(cardData.lead)
            lead.idCard = card._id
      
            card.user = await repository.findObject(User, { "username": userName })
            
            card.statistic = statistic;
            card.lead = lead;

            card.socialMedia = await socialMediasService.saveSocialMedias(cardData.socialMedia);
            card.galleryList = await galleryService.saveGallerys(cardData.galleryList); 
            card.reviewsList = await reviewService.saveReveiws(cardData.reviewsList); 

            card.socialMedia.idCard = card._id
            card.galleryList.idCard = card._id
            card.reviewsList.idCard = card._id

            repository.saveObject(card).then(async (savedObj) => {
                let cardAfterSave = await repository.findObjectAndUpdate(User, [{ "username": userName }, { $push: { cards: savedObj._id } }, { new: true }])
                resolve(savedObj);
            }).catch((err)=>{
                console.log(err)
                reject(err)
            })
        }

        catch (error) {
            console.log("error", error)
            reject(error)
        }
    })

}

let updateDigitalCard = (cardData,cardId) => {

    return new Promise(async (resolve, reject) => {
        try {

            let card = cardData;
            card.socialMedia = await socialMediasService.updateSocialMedia(card.socialMedia) 
            card.galleryList = await galleryService.updateGallery(card.galleryList) 
            card.reviewsList = await reviewService.updateReveiw(card.reviewsList) 
            card.lead = await leadService.updateLead(card.lead) 
            let statistic = await repository.findObjectByIdAndUpdate(Statistic, card.statistic, [{ isDelete: true }, { new: true }])

            repository.findObjectByIdAndUpdate(Card, { _id: cardId }, [{ new: true }]).then((currentCard) => {
                resolve(card)
            }).catch((err) => {            
                reject(err)
            })
        }
        catch (err) {
            console.log("err: ",err)
            reject(err)
        }
    })
}


let deleteCard = (cardId) => {
    return new Promise(async (resolve, reject) => {
        try {

            let currentCard = await repository.findObject(Card, { _id: cardId })
            currentCard.isDelete = true;
            let result=await repository.saveObject(Card, currentCard)
            resolve(result);
        } catch (error) {
            console.log(error)
            reject(error)
        }
    })

}

let copyCard = (cardData, username) => {
    return new Promise(async (resolve, reject) => {
        const cardToCopy = cardData;
        const userName = username;
        try {
            let card = await new Card()
            let newCard = await new Card(cardToCopy)
            newCard._id = card._id
            let newStatistic = await new Statistic()
            newCard.statistic = newStatistic;
            newStatistic.idCard = card;
            await repository.saveObject(newStatistic)
            //copy lead
            let lead = await new Lead()
            let newLead = await new Lead(cardToCopy.lead)
            newLead._id = lead._id
            newCard.lead = newLead;
            await repository.saveObject(newLead)
            newCard.socialMedia = await socialMediasService.saveSocialMedias(cardToCopy.socialMedia); 
            newCard.galleryList = await galleryService.saveGallerys(cardToCopy.galleryList);  
            newCard.reviewsList = await reviewService.saveReveiws(cardToCopy.reviewsList); 
            repository.saveObject(newCard).then((cardAfterSave) => {
                repository.findObjectAndUpdate(User, [{ "username": userName }, { $push: { cards: cardAfterSave._id } }, { new: true }])
                resolve(cardAfterSave)
            }).catch((err) => {
                reject(err)
            })
        }
        catch (error) {
            reject(error)
        }
    })
}

let checkUniqueCardName = (cardData) => {
    return new Promise(async (resolve, reject) => {
        let cardName = cardData.cardname;
        let id = cardData.id;
        try {
            let card = await repository.findObject(Card, { cardName: cardName, isDelete: false })
            if (card && card._id != id) {
                resolve(false)
            }

            resolve(true);
        } catch (err) {
            reject(err);
        }

    })

}

let editCardName = (cardData) => {
    return new Promise(async (resolve, reject) => {
        try {
            let cardId = cardData.cardId;
            let cardName = cardData.cardName;
            const filter = { _id: cardId };
            const update = { cardName: cardName };
            let doc = await repository.findObjectAndUpdate(Card, [filter, update])
            resolve(doc);
        }
        catch (err) {
            reject(err)
        }
    })
}

let getCardsIndex = () => {

    return new Promise(async(resolve, reject) => {
        try {
            let count = await repository.countDoc(Card)
            resolve(count)
        } catch (err) {
            reject(err)
        }
    })
}

let sumEmailSent = (cardName) => {
    return new Promise(async(resolve, reject) => {
        const card = await repository.findObject(Card, { cardName: cardName, isDelete: false })
        const statistic = await repository.findObject(Statistic, { idCard: card._id })
        statistic.emailCnt++;
        await repository.saveObject(statistic)
        if (statistic)
            resolve("access denied");
        reject('access denied');
    });
}

let createContactLeaderBox = (data) => {
    return new Promise(async(resolve, reject) => {
        const { body, mailTo } = data;
        const email = {
            source: "Know me",
            subject: "Form Knowme🙂",
            from: "knowme@noreply.leader.codes",
            to: mailTo,
            body: body,
            files: null
        }
        let options = {
            url: `https://api.dev.leader.codes/${'rivkaf'}/createSystemWave`,
            method: 'POST',
            headers: { Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJtVjhWM2V2c2NQUFJGcDZNNkZ4eWlIQ1JrdkczIiwiZW1haWwiOiJyaXZrYWZvZ2VsbWFuQGdtYWlsLmNvbSIsImlhdCI6MTYyMDczMjgyNH0.v1j1_lIcenKPHNvHXaOlfBhYNH3YU12nAB71nQ_Vrd4" },
            json: email
        }
        try {
            let res = await service.sendExternalApi(options)
            resolve(res)
        } catch (err) { reject(err) }
    })
}
sendMessageByCard = async(mailTo, body, username, reqData) => {

    console.log("body__________", body);
    console.log("mailTo__________", mailTo);
    console.log("username__________", username);
    await service.createContactLeaderBox(reqData.body);
    await service.sumEmailSent(reqData.params.cardName)
    const email = {
        from: `${username}@mails.codes`,
        to: mailTo, //emailTo
        subject: "Knowme",
        html: body
    }
    const options = {
        url: 'https://mails.codes/mail/sendEmail',
        method: 'POST',
        headers: { Authorization: "secretKEY@2021" },
        json: email,
    };
    try {
        let res = await service.sendExternalApi(options)
        resolve(res)
    } catch (err) { reject(err) }
}

let sendMessageByCardMultiEmails = (data) => {
    const { listMail, body } = data;
    console.log("listMail___________", listMail);
    return new Promise(async(resolve, reject) => {
        console.log("inside listMail !")
        try {
            Promise.all(
                listMail.map(async(mail) => {
                    console.log("mail" + mail)
                    let splitMailUser = mail.split('@');
                    let userName = splitMailUser[0];
                    sendMessageByCard(mail, body, userName, data)
                })).then(() => {
                resolve(true)
            })

        } catch (error) {
            console.log("reveiw errore: -", error)
            reject(error);
        }
        resolve(true)
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

let activeData = (statisticActiv, value) => {
    return new Promise(async(resolve, reject) => {
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

let newActiveIP = async(reqData) => {
    const { cardName } = reqData.params;
    return new Promise(async(resolve, reject) => {
        try {
            const clientIp = "84.95.241.10";
            let geo = geoip.lookup(clientIp);
            let country = geo.country == 'IL' ? 'IS' : geo.country
            let parser1 = new UAParser();
            let userAgent = reqData.headers['user-agent'];
            let deviceDetector = new DeviceDetector();
            let browserName = parser1.setUA(userAgent).getBrowser().name;
            let operationType = parser1.setUA(userAgent).getOS().name;
            let device = deviceDetector.parse(userAgent).device.type;
            let card = await repository.findObject(Card, { cardName: cardName, isDelete: false })
            if (card) {
                let statistic = await repository.find(Statistic, card.statistic)
                if (statistic.viewsCnt == 0) {
                    statistic.dateCreated = new Date()
                }
                statistic.viewsCnt += 1;
                await repository.pushObject(statistic.allDatesViews, new Date())
                await service.activeData(statistic.actives.country, country)
                await service.activeData(statistic.actives.browser, browserName)
                await service.activeData(statistic.actives.operationType, operationType)
                await service.activeData(statistic.actives.dvices, device)
                if (!statistic.actives)
                    reject("not active");
                let savedStatistic=await repository.saveObject(statistic)
                resolve(savedStatistic);
            } else
                resolve(null);
        } catch (err) {
            console.log(err.message);
        }

    });
}

getCardByName = (reqData) => {
    return new Promise(async(resolve, reject)=>{
        const { cardName } = reqData.params;
        const data = reqData
        try{
       let statistic= await service.newActiveIP(data)
       let card= await repository.getCardByName(Card,{cardName: cardName, isDelete: false })
       resolve(card)
        }
          catch(err)
         {
        reject(err)
         }
    })
}

userIdByCardName = async(cardName) => {
    return new Promise(async(resolve, reject) => {
        try{
        const user=await repository.findObject(Card,{ cardName: cardName })
        const userId=user.user.userId
        console.log(userId);
        if (userId)
            resolve(userId);
        reject('not userId');
        }
        catch(err)
        {
            reject(err)
        }
    });
}
module.exports = {
    createDigitalCard,
    updateDigitalCard,
    deleteCard,
    copyCard,
    checkUniqueCardName,
    editCardName,
    getCardsIndex,
    sumEmailSent,
    createContactLeaderBox,
    sendMessageByCardMultiEmails,
    getAllCards,
    activeData,
    newActiveIP,
    userIdByCardName
}