const express = require('express');
const router = express.Router();

const digitalCardController = require('../controller/digitalCard.js')
const CategoriesController = require('../controller/Categories.js')
const UserController = require('../controller/User.js')
const FilesController = require('../controller/Files.js')
const Gallery = require('../models/Gallery.js');

//categories
router.get('/getCategories/categories/allCategories/cards', CategoriesController.getCategories);
<<<<<<< HEAD

// mail
router.post('/', digitalCardController.sendMessageByCard);

// file
router.post('/:userName/:uId/upload', FilesController.upload);
router.post("/:userName/:uId/removeMultipleFiles", FilesController.removeMultipleFiles)

=======

// mail
router.post('/', digitalCardController.sendMessageByCard);

// file
router.post('/:userName/:uId/upload', FilesController.upload);
router.post("/:userName/:uId/removeMultipleFiles", FilesController.removeMultipleFiles)

>>>>>>> 8d2163eb87c06a2006ff01fe9bc27cafd13d8523
//card
router.post("/:userName/checkUniqueCardName", digitalCardController.checkUniqueCardName);
router.post("/:userName/editCardName", digitalCardController.editCardName);
router.put("/:userName/addContactOptions/:cardId", digitalCardController.addContactOptions);
router.post("/:userName/:cardId/delete", digitalCardController.deleteCard);
router.get('/:userName/getUser/user', UserController.getUidByUserName);
router.put("/:userName/:cardId", digitalCardController.updateDigitalCard);
router.get('/:userName', digitalCardController.getDigitalCard);
<<<<<<< HEAD
<<<<<<< HEAD
router.get("/:userName/:cardName", digitalCardController.getCardById);
=======
router.get("/:cardId/:cardName", digitalCardController.getCardById);
>>>>>>> 8d2163eb87c06a2006ff01fe9bc27cafd13d8523
=======
router.get("/:cardName/:cardId", digitalCardController.getCardById);
>>>>>>> 7cad2ccb040b482c215f33c94f0fd26497b61946
router.post('/:userName', digitalCardController.createDigitalCard);
module.exports = router;