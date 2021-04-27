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




module.exports = router;

// const express = require('express');
// const router = express.Router();

// const digitalCardController = require('../controller/digitalCard.js')
// const CategoriesController = require('../controller/Categories.js')
// const UserController = require('../controller/User.js')
// const FilesController = require('../controller/Files.js');
// const authController = require('../controller/auth.js');
// const Gallery = require('../models/Gallery.js');
// const Review = require('../controller/Reveiwies.js');
// //categories
// router.get('/getCategories/categories/allCategories/cards', CategoriesController.getCategories);

// // mail
// router.post('/sendMessageByCard/:cardName', digitalCardController.sendMessageByCard);

// // file
// router.post('/:userName/:uId/upload',authController.checkPermission, FilesController.upload);
// router.post("/:userName/:uId/removeMultipleFiles",authController.checkPermission, FilesController.removeMultipleFiles)

// //reveiw
// router.post("/:userName/:reveiwId/deleteReveiws",authController.checkPermission, Review.deleteReveiw);

// //card
// router.post("/:userName/checkUniqueCardName",authController.checkPermission,digitalCardController.checkUniqueCardName);
// router.post("/:userName/editCardName",authController.checkPermission, digitalCardController.editCardName);
// router.post("/:userName/updateUserIndexCardName",authController.checkPermission, UserController.updateUserIndexCardName);
// router.put("/:userName/addContactOptions/:cardId",authController.checkPermission, digitalCardController.addContactOptions);
// router.post("/:userName/:cardId/delete",authController.checkPermission, digitalCardController.deleteCard);
// router.get('/:userName/getUser/user',authController.checkPermission, UserController.getUidByUserName);
// router.put("/:userName/:cardId",authController.checkPermission, digitalCardController.updateDigitalCard);
// router.get("/getCard/:cardName",authController.checkPermission, digitalCardController.getCardById);
// router.get('/:userName',authController.checkPermission,digitalCardController.getDigitalCard);
// router.post('/:userName',authController.checkPermission,digitalCardController.createDigitalCard);
// router.get('/:userName/getCardsIndex',authController.checkPermission,digitalCardController.getCardsIndex);

// module.exports = router;