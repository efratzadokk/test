const repository= require('../repository/DigitalCard.repository')
const Card = require('../models/Card.js');
const Lead = require('../models/Leads.js');
const Statistic = require('../models/Statistics');
const { resolve } = require('path');
// const { updateDigitalCard } = require('../controller/digitalCard');

let createDigitalCard =  (cardData) => {
    return new Promise(async(resolve, reject)=>{
        try {
            let card =  new Card(cardData)
            let statistic =  new Statistic(cardData.statistic)
            statistic.cardName = card.cardName
            statistic.idCard = card._id
           await repository.saveObject(statistic)
            let lead =  new Lead(cardData.lead)
            lead.idCard = card._id
            await repository.saveObject(lead)
            card.user=await repository.findObject(User,{"username": req.params.userName})
            card.statistic = statistic;
            card.lead = lead;
    
            card.socialMedia = await SocialMediaController.saveSocialMedias(req.body.socialMedia); //change the call to be executed from service 
            card.galleryList = await GalleryController.saveGallerys(req.body.galleryList); //change the call to be executed from service 
            card.reviewsList = await ReveiwieController.saveReveiws(req.body.reviewsList); //change the call to be executed from service 
    
            card.socialMedia.idCard = card._id
            card.galleryList.idCard = card._id
            card.reviewsList.idCard = card._id
    
            repository.saveObject(card).then(async(savedObj)=>{
               let cardAfterSave= await repository.findObjectAndUpdate(User,[{ "username": req.params.userName }, { $push: { cards: savedObj._id } }, { new: true }])
                resolve (savedObj);
            })
        }
    
        catch (error) {
            console.log("error", error)
           reject(error)
        }
    })
    
    }

let updateDigitalCard=(cardData)=>{

return new Promise(async(resolve,reject)=>{
try{

    let card = req.body;
    card.socialMedia = await
        SocialMediaController.updateSocialMedia(card.socialMedia) //change the call to be executed from service 
    card.galleryList = await GalleryController.updateGallery(card.galleryList) //change the call to be executed from service 
    card.reviewsList = await ReveiwieController.updateReveiw(card.reviewsList) //change the call to be executed from service 
    card.lead = await LeadController.updateLead(card.lead) //change the call to be executed from service 

    let statistic= await repository.findObjectByIdAndUpdate(Statistic,card.statistic,[{ isDelete: true }, { new: true }])

    repository.findObjectByIdAndUpdate(Card, { _id: req.params.cardId },[{ new: true }]).then((currentCard)=>{
        resolve(card)
    }).catch((err)=>{
        reject(err)
    })
}
catch(err)
{
    reject(err)
}
})
}


let deleteCard=(cardData)=>{
    return new Promise(async (resolve, reject)=>{
        try {
     
            let currentCard=await repository.findObject(Card,{ _id: req.params.cardId })
              currentCard.isDelete = true;
      
              let result= await repository.saveObject(currentCard)
              resolve(result);
          } catch (error) {
             reject(error)
          }
    })

}

let copyCard=(cardData,username)=>{
    return new Promise(async(resolve,reject)=>{ 
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
        newCard.socialMedia = await SocialMediaController.saveSocialMedias(cardToCopy.socialMedia); //change the call to be executed from service 
        newCard.galleryList = await GalleryController.saveGallerys(cardToCopy.galleryList); //change the call to be executed from service 
        newCard.reviewsList = await ReveiwieController.saveReveiws(cardToCopy.reviewsList); //change the call to be executed from service 
         repository.saveObject(newCard).then((cardAfterSave)=>{
             repository.findObjectAndUpdate(User,[ { "username": userName }, { $push: { cards: cardAfterSave._id } }, { new: true }])
             resolve (cardAfterSave)
         }).catch((err)=>{
             reject(err)
         })
    }
    catch (error) {
     reject(error)
    }
})
}

let checkUniqueCardName=(cardData)=>{
    return new Promise(async (resolve, reject)=>{
        let cardName = cardData.cardname;
        let id = cardData.id;
        try {
            let card = await repository.findObject(Card,{cardName: cardName, isDelete: false})
            if (card && card._id != id) {
               resolve (false)
            }
    
            resolve(true);
        } catch (err) {
            reject(err);
        }

    })

}

let editCardName=(cardData)=>{
    return new Promise(async(resolve, reject)=>{
        try{
        let cardId = cardData.cardId;
        let cardName = cardData.cardName;
        const filter = { _id: cardId };
        const update = { cardName: cardName };
       let doc=await repository.findObjectAndUpdate(Card, [filter,update])
       resolve(doc);
        }
        catch(err)
       { 
           reject(err)
        }
    })
}


module.exports={createDigitalCard,updateDigitalCard,deleteCard,copyCard,checkUniqueCardName,editCardName}