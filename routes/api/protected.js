const express = require('express');
const router = express.Router();

const DigitalCardController = require('../../controller/digitalCard.js')
const RegisterController = require('../../controller/register.js')
const UserController = require('../../controller/User.js')
const FilesController = require('../../controller/Files.js')
const ReviewController = require('../../controller/Reveiwies.js');

//permission
router.get('/:userName/isPermission',RegisterController.cheakPremission);

// file
router.post('/:userName/:uId/upload', FilesController.upload);
router.post("/:userName/:uId/removeMultipleFiles", FilesController.removeMultipleFiles)

//reveiw
router.post("/:userName/:reveiwId/deleteReveiws", ReviewController.deleteReveiw);

//card
router.post("/:userName/checkUniqueCardName", DigitalCardController.checkUniqueCardName);
router.post("/:userName/editCardName", DigitalCardController.editCardName);
router.post("/:userName/updateUserIndexCardName", UserController.updateUserIndexCardName);
router.put("/:userName/addContactOptions/:cardId", DigitalCardController.addContactOptions);
router.post("/:userName/:cardId/delete", DigitalCardController.deleteCard);
router.get('/:userName/getUser/user', UserController.getUidByUserName);
router.put("/:userName/:cardId", DigitalCardController.updateDigitalCard);
router.get("/getCard/:cardName", DigitalCardController.getCardById);
router.get('/:userName', DigitalCardController.getDigitalCard);
router.post('/:userName', DigitalCardController.createDigitalCard);
router.get('/:userName/getCardsIndex', DigitalCardController.getCardsIndex);


module.exports = router;


