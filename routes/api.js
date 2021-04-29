const express = require('express');
const router = express.Router();

const digitalCardController = require('../controller/digitalCard.js')
const CategoriesController = require('../controller/Categories.js')
const UserController = require('../controller/User.js')
const FilesController = require('../controller/Files.js')
const Gallery = require('../models/Gallery.js');
const Review = require('../controller/Reveiwies.js');
//categories
router.get('/getCategories/categories/allCategories/cards', CategoriesController.getCategories);

// mail
router.post('/sendMessageByCard/:cardName', digitalCardController.sendMessageByCard);

// file
router.post('/:userName/:uId/upload', FilesController.upload);
router.post("/:userName/:uId/removeMultipleFiles", FilesController.removeMultipleFiles)

//reveiw
router.post("/:userName/:reveiwId/deleteReveiws", Review.deleteReveiw);

//card
router.post("/:userName/checkUniqueCardName", digitalCardController.checkUniqueCardName);
router.post("/:userName/editCardName", digitalCardController.editCardName);
router.post("/:userName/updateUserIndexCardName", UserController.updateUserIndexCardName);
router.put("/:userName/addContactOptions/:cardId", digitalCardController.addContactOptions);
router.post("/:userName/:cardId/delete", digitalCardController.deleteCard);
router.get('/:userName/getUser/user', UserController.getUidByUserName);
router.put("/:userName/:cardId", digitalCardController.updateDigitalCard);
router.get("/getCard/:cardName", digitalCardController.getCardById);
router.get('/:userName', digitalCardController.getDigitalCard);
router.post('/:userName', digitalCardController.createDigitalCard);
router.get('/:userName/getCardsIndex', digitalCardController.getCardsIndex);


router.get('/:userName/getCardsIndex', (req,res)=>{

    digitalCardController.example(req.param.cardName)
    
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.send(err)
    })

});


router.get('/:userName/getAllCards',(req,res)=>{

    digitalCardController.getAllCards(req.params.userName)
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.send(err)
    })
});

module.exports = router;


