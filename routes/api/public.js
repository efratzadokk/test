const express = require('express');
const router = express.Router();

const digitalCardController = require('../../controller/digitalCard.js')
const CategoriesController = require('../../controller/Categories.js')


//categories
router.get('/getCategories/categories/allCategories/cards', CategoriesController.getCategories);

// mail
router.post('/sendMessageByCard/:cardName', digitalCardController.sendMessageByCard);


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


