const express = require('express');
const router = express.Router();

const digitalCardController = require('../controller/digitalCard.js')
const CategoriesController = require('../controller/Categories.js')
const UserController = require('../controller/User.js')



router.post('/:uId', digitalCardController.createDigitalCard);
router.post('/', digitalCardController.sendMessageByCard);
router.post("/:uId/:cardId", digitalCardController.deleteCard);
router.get('/:uId', digitalCardController.getDigitalCard);
router.get("/:uId/:cardId", digitalCardController.getCardById);
router.get('/getUser/user/:userName', UserController.getUidByUserName);
router.get('/', CategoriesController.getCategories);
router.put("/:uId/:cardId", digitalCardController.updateDigitalCard);


module.exports = router;