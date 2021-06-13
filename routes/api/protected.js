const express = require('express');
const router = express.Router();

const DigitalCardController = require('../../controller/card.js')
const RegisterController = require('../../controller/register.js')
const UserController = require('../../controller/user.js')
const ReviewController = require('../../controller/review.js');
const StatisticController = require('../../controller/statistic');
const marketplaceController =require('../../controller/marketplace');

//permission
router.get('/:userName/isPermission',RegisterController.cheakPremission);

//reveiw
router.post("/:userName/:reveiwId/deleteReveiws", ReviewController.deleteReveiw);

//statisticsetCntSocialMediaAndCall
router.get("/:userName/getStatistic/:cardName", StatisticController.getStatistic);


//card
router.post("/:userName/checkUniqueCardName", DigitalCardController.checkUniqueCardName);
router.post("/:userName/editCardName", DigitalCardController.editCardName);
router.post("/:userName/updateUserIndexCardName", UserController.updateUserIndexCardName);
router.get("/:userName/deleteCard/:cardId", DigitalCardController.deleteCard);
router.post("/:userName/updateCard/:cardId", DigitalCardController.updateDigitalCard);
router.post('/:userName/saveNewCard', DigitalCardController.createDigitalCard);
router.get('/:userName/getCardsIndex', DigitalCardController.getCardsIndex);
router.post('/:userName/copyCard', DigitalCardController.copyCard);

router.get('/:userName/getAllCards',(req,res)=>{

    DigitalCardController.getAllCards(req.params.userName).
    then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.send(err)
    })
});

//marketplace
router.post("/:userName/checkUniqueMarketName", marketplaceController.checkUniqueMarketName);

router.post("/:userName/saveMarketplace",(req,res)=>{

    marketplaceController.saveMarketplace(req.params.userName,req.body).
    then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.send(err)
    })
});


router.post("/:userName/updateMarketplace",(req,res)=>{

    marketplaceController.updateMarketplace(req.params.userName,req.body).
    then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.send(err)
    })
});

router.get('/:userName/getAllMarkets',(req,res)=>{

    marketplaceController.getAllMarkets(req.params.userName).
    then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.send(err)
    })
});


module.exports = router;


