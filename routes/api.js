const express = require('express');
const router = express.Router();

const digitalCardController = require('../controller/digitalCard.js')
const CategoriesController = require('../controller/Categories.js')
const UserController = require('../controller/User.js')
const FilesController = require('../controller/Files.js')
const Gallery = require('../models/Gallery.js');

//categories
router.get('/getCategories/categories/allCategories/cards', CategoriesController.getCategories);

// mail
router.post('/', digitalCardController.sendMessageByCard);

// file
router.post('/:userName/:uId/upload', FilesController.upload);
router.post("/:userName/:uId/removeMultipleFiles", FilesController.removeMultipleFiles)

//card
router.post("/:userName/checkUniqueCardName", digitalCardController.checkUniqueCardName);
router.post("/:userName/editCardName", digitalCardController.editCardName);
router.post("/:userName/updateUserIndexCardName", UserController.updateUserIndexCardName);
router.put("/:userName/addContactOptions/:cardId", digitalCardController.addContactOptions);
router.post("/:userName/:cardId/delete", digitalCardController.deleteCard);
router.get('/:userName/getUser/user', UserController.getUidByUserName);
router.put("/:userName/:cardId", digitalCardController.updateDigitalCard);
router.get('/:userName', digitalCardController.getDigitalCard);
router.get("/:userName/:cardName", digitalCardController.getCardById);
router.post('/:userName', digitalCardController.createDigitalCard);

module.exports = router;