const express = require('express');
const router = express.Router();

const digitalCardController = require('../controller/digitalCard.js')
const CategoriesController = require('../controller/Categories.js')
const UserController = require('../controller/User.js')
const FilesController = require('../controller/Files.js')
const Gallery = require('../models/Gallery.js');

router.post('/:uId/upload', FilesController.upload);
router.post('/:uId', digitalCardController.createDigitalCard);
router.post('/', digitalCardController.sendMessageByCard);
router.post("/:uId/:cardId", digitalCardController.deleteCard);
router.get('/:uId', digitalCardController.getDigitalCard);
router.get("/:uId/:cardId", digitalCardController.getCardById);
router.get('/getUser/user/:userName', UserController.getUidByUserName);
router.get('/getCategories/categories/allCategories/cards', CategoriesController.getCategories);
router.put("/:uId/:cardId", digitalCardController.updateDigitalCard);


module.exports = router;