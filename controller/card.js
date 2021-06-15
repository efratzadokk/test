const service = require('../services/DigitalCard.service')

const { resolve } = require('path');


createDigitalCard = async(req, res) => {
    try {
        let cardBody = (req.body)
        let userName = req.params.userName
        let card = await service.createDigitalCard(cardBody, userName)
        return res.status(201).json(card)
    } catch (err) {
        res.send(err)
    }

    //     let card = await new Card(req.body)
    //     let statistic = await new Statistic(req.body.statistic)
    //     statistic.cardName = card.cardName
    //     statistic.idCard = card._id
    //     await statistic.save()
    //     let lead = await new Lead(req.body.lead)
    //     lead.idCard = card._id
    //     await lead.save()
    //     card.user = await User.findOne({ "username": req.params.userName })
    //     card.statistic = statistic;
    //     card.lead = lead;
    //     card.socialMedia = await SocialMediaController.saveSocialMedias(req.body.socialMedia);
    //     card.galleryList = await GalleryController.saveGallerys(req.body.galleryList);
    //     card.reviewsList = await ReveiwieController.saveReveiws(req.body.reviewsList);

    //     card.socialMedia.idCard = card._id
    //     card.galleryList.idCard = card._id
    //     card.reviewsList.idCard = card._id
    //     card.save(async (err, cardAfterSave) => {
    //         if (err)
    //             return res.send(err)
    //         await User.findOneAndUpdate(
    //             { "username": req.params.userName },
    //             { $push: { cards: cardAfterSave._id } },
    //             { new: true }
    //         )
    //         return res.status(200).json(cardAfterSave)
    //     })
    // }
    // catch (error) {
    //     console.log("error", error)
    //     res.send(error)
    // }
}


updateDigitalCard = async(req, res) => {

    try {
        let cardBody = (req.body)
        let card = await service.updateDigitalCard(cardBody)
        return res.json(card)
    } catch (err) {
        res.send(err)
    }

    // let card = req.body;
    // card.socialMedia = await
    //     SocialMediaController.updateSocialMedia(card.socialMedia)
    // card.galleryList = await GalleryController.updateGallery(card.galleryList)
    // card.reviewsList = await ReveiwieController.updateReveiw(card.reviewsList)
    // card.lead = await LeadController.updateLead(card.lead)
    // let statistic = await Statistic.findByIdAndUpdate(card.statistic, { isDelete: true }, { new: true });
    // Card.findByIdAndUpdate(
    //     { _id: req.params.cardId },
    //     card,
    //     { new: true },
    //     (err, currentCard) => {
    //         if (err) {
    //             console.log(err);
    //             res.send(err);
    //         }
    //         res.status(200).json(card);
    //     }
    // );
};

deleteCard = async(req, res) => {

    try {
        let cardBody = (req.body)
        let card = await service.deleteCard(cardBody)
        return res.json(card)
    } catch (err) {
        res.send(err)
    }

    // try {
    //     let currentCard = await Card.findOne({ _id: req.params.cardId });
    //     currentCard.isDelete = true;
    //     let result = await currentCard.save();
    //     res.send(result);
    // } catch (error) {
    //     res.send(error)
    // }
}
copyCard = async(req, res) => {
    try {
        let cardBody = (req.body)
        let userName = req.params.userName
        let card = await service.copyCard(cardBody, userName)
        return res.status(201).json(card)
    } catch (err) {
        res.send(err)
    }

    // const cardToCopy = req.body;
    // const userName = req.params.userName;

    // try {
    //     //copy card
    //     let card = await new Card()
    //     let newCard = await new Card(cardToCopy)
    //     newCard._id = card._id

    //     //create new statistic
    //     let newStatistic = await new Statistic()
    //     newCard.statistic = newStatistic;
    //     newStatistic.idCard = card;
    //     await newStatistic.save();

    //     //copy lead
    //     let lead = await new Lead()
    //     let newLead = await new Lead(cardToCopy.lead)
    //     newLead._id = lead._id
    //     newCard.lead = newLead;
    //     await newLead.save();

    //     newCard.socialMedia = await SocialMediaController.saveSocialMedias(cardToCopy.socialMedia);
    //     newCard.galleryList = await GalleryController.saveGallerys(cardToCopy.galleryList);
    //     newCard.reviewsList = await ReveiwieController.saveReveiws(cardToCopy.reviewsList);

    //     newCard.save(async (err, cardAfterSave) => {
    //         console.log("card-----", cardAfterSave);
    //         if (err)
    //             return res.send(err)
    //         await User.findOneAndUpdate(
    //             { "username": userName },
    //             { $push: { cards: cardAfterSave._id } },
    //             { new: true }
    //         )
    //         return res.status(200).json(cardAfterSave)
    //     })
    // }
    // catch (error) {
    //     console.log("error", error)
    //     res.send(error)
    // }
}

//by card name only
checkUniqueCardName = async(req, res) => {
    try {
        let cardBody = (req.body)
        let isCardExist = await service.checkUniqueCardName(cardBody)
        return res.json(isCardExist)
    } catch (err) {
        res.send(err)
    }
    // let cardName = req.body.cardname;
    // let id = req.body.id;
    // try {
    //     let card = await Card.findOne({ cardName: cardName, isDelete: false })
    //     if (card && card._id != id) {
    //         return res.send(false)
    //     }

    //     res.send(true);
    // } catch (err) {
    //     res.send(err);
    // }
}


editCardName = async(req, res) => {

    try {
        let cardBody = (req.body)
        let isCardExist = await service.editCardName(cardBody)
        return res.json(isCardExist)
    } catch (err) {
        res.send(err)
    }

    // let cardId = req.body.cardId;
    // let cardName = req.body.cardName;
    // const filter = { _id: cardId };
    // const update = { cardName: cardName };
    // let doc = await Card.findOneAndUpdate(filter, update);
    // res.send(doc);

}

getCardsIndex = (req, res) => {
    service.getCardsIndex().then((count) => {
        return res.send({ count: count })
    }).
    catch(err) 
        {
            res.send(err)
        }
        // Card.countDocuments({}, (err, count) => {
        //     if (err) {
        //         res.status(500).send(err);
        //     }
        //     console.log("count", count)
        //     res.status(200).send({ count: count });
        // })
}

// sumEmailSend = async (cardName) => {

// return new Promise(async (resolve, reject) => {
//     const card = await Card.findOne({ cardName: cardName, isDelete: false })
//     let statistic = await Statistic.findOne({ idCard: card._id })
//     statistic.emailCnt++;
//     await statistic.save()
//     if (statistic)
//         resolve("access denied");
//     reject('access denied');
// });
// }




sendMessageByCardMultiEmails = async(req, res) => {
    try {
        let listMailData = req.body
        let success = await service.sendMessageByCardMultiEmails(listMailData)
        return res.json(success)
    } catch (err) {
        res.send(err)
    }

    //     const { listMail, body} = req.body;
    //     console.log("listMail___________", listMail);
    //     return new Promise(async (resolve, reject) => {
    //     console.log("inside listMail !")
    //     try {
    //         Promise.all(
    //             listMail.map(async (mail) => {
    //                 console.log("mail"+mail)
    //            let splitMailUser=mail.split('@');
    //            let userName=splitMailUser[0];
    //                 service.sendMessageByCard(mail,body,userName,req)
    //             })).then(() => {
    //                 resolve(true)
    //             })

    //     } catch (error) {
    //         console.log("reveiw errore: -", error)
    //         reject(error);
    //     }
    //     res.send(true);
    // });

}
getAllCards = async(req, res) => {
    try {
        let username = req.params.userName
        let cards = await service.getAllCards(username)
        return res.json(cards)
    } catch (err) {
        res.send(err)
    }
}


getCardByName=async (req,res)=>{

    try {
        let data=req
        let card = await service.getCardByName(data)
        return res.json(card)
    } catch (err) {
        res.send(err)
    }
}

userIdByCardName = async(cardName) => {
    return new Promise(async(resolve, reject) => {
        const userId = await Card.find({ cardName: cardName }).user.userId
        console.log(userId);
        if (userId)
            resolve(userId);
        reject('not userId');
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
    copyCard,
    userIdByCardName,
}