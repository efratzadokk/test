const express = require('express');
const router = express.Router();

const digitalCardController = require('../controller/digitalCard.js')
const CategoriesController = require('../controller/Categories.js')
const UserController = require('../controller/User.js')
const FilesController = require('../controller/Files.js')
const Gallery = require('../models/Gallery.js');

// file
router.post('/:uId/upload', FilesController.upload);
router.post("/:uId/removeMultipleFiles",FilesController.removeMultipleFiles)

//card
router.post('/', digitalCardController.sendMessageByCard);
router.post("/:uId/:cardId", digitalCardController.deleteCard);
router.get('/:uId', digitalCardController.getDigitalCard);
router.get("/:userName/:cardName", digitalCardController.getCardById);
router.get('/getUser/user/:userName', UserController.getUidByUserName);
router.get('/getCategories/categories/allCategories/cards', CategoriesController.getCategories);
router.put("/:uId/:cardId", digitalCardController.updateDigitalCard);
router.post("/editCardName", digitalCardController.editCardName);
router.post("/checkUniqueCardName", digitalCardController.checkUniqueCardName);
router.post('/:uId', digitalCardController.createDigitalCard);

module.exports = router;