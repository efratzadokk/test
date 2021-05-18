const express = require('express');
const router = express.Router();

const digitalCardController = require('../../controller/digitalCard.js')
const CategoriesController = require('../../controller/Categories.js')
const StatisticController = require('../../controller/statistic')


//categories
router.get('/getCategories/categories/allCategories/cards', CategoriesController.getCategories);

// mail
router.post('/sendMessageByCard/:cardName', digitalCardController.sendMessageByCard);

//statistic
router.post("/setCntSocialMediaAndCall/:cardName", StatisticController.setCntSocialMediaAndCall);

router.get('/getCardByName/:cardName',(req,res)=>{

    digitalCardController.getCardByName(req)
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.send(err)
    })
})


module.exports = router;


