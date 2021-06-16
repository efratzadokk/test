const express = require('express');
const router = express.Router();

const digitalCardController = require('../../controller/card.js')
const CategoriesController = require('../../controller/categories.js')
const StatisticController = require('../../controller/statistic')
const marketplaceService =require('../../service/marketplace.service');



//categories
router.get('/getCategories/categories/allCategories/cards', CategoriesController.getCategories);

// mail
router.post('/sendMessageByCard/:cardName', digitalCardController.sendMessageByCard);
 router.post('/sendMessageByCardMultiEmails/:cardName', digitalCardController.sendMessageByCardMultiEmails);


//statistic
router.post("/setCntSocialMediaAndCall/:idStatistic", StatisticController.setCntSocialMediaAndCall);

router.get('/getCardByName/:cardName',digitalCardController.getCardByName)

//get market
router.get('/getMarketByName/:marketName', marketplaceService.getMarketByName)


module.exports = router;


