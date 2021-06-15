const express = require('express');
const router = express.Router();

const digitalCardController = require('../../controller/card.js')
const CategoriesController = require('../../controller/categories.js')
const StatisticController = require('../../controller/statistic')
const marketplaceController =require('../../controller/marketplace');



//categories
router.get('/getCategories/categories/allCategories/cards', CategoriesController.getCategories);

// mail
router.post('/sendMessageByCard/:cardName', digitalCardController.sendMessageByCard);
 router.post('/sendMessageByCardMultiEmails/:cardName', digitalCardController.sendMessageByCardMultiEmails);


//statistic
router.post("/setCntSocialMediaAndCall/:idStatistic", StatisticController.setCntSocialMediaAndCall);

router.get('/getCardByName/:cardName',(req,res)=>{

    digitalCardController.getCardByName(req)
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.send(err)
    })
})

//get market
router.get('/getMarketByName/:marketName',(req,res)=>{

    marketplaceController.getMarketByName(req)
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.send(err)
    })
})


module.exports = router;


