const express = require('express');
const router = express.Router();

const DigitalCardController = require('../../controller/digitalCard.js')
const RegisterController = require('../../controller/register.js')
const UserController = require('../../controller/User.js')
const FilesController = require('../../controller/Files.js')
const ReviewController = require('../../controller/Reveiwies.js');
const StatisticController = require('../../controller/statistic');
//permission
router.get('/:userName/isPermission',RegisterController.cheakPremission);

// file
router.post('/:userName/uploadFile', FilesController.upload);
router.post("/:userName/:uId/removeMultipleFiles", FilesController.removeMultipleFiles)

//reveiw
router.post("/:userName/:reveiwId/deleteReveiws", ReviewController.deleteReveiw);

//statisticsetCntSocialMediaAndCall
router.post("/:userName/setCntSocialMediaAndCall/:cardId", StatisticController.setCntSocialMediaAndCall);


//card
router.post("/:userName/checkUniqueCardName", DigitalCardController.checkUniqueCardName);
router.post("/:userName/editCardName", DigitalCardController.editCardName);
router.post("/:userName/updateUserIndexCardName", UserController.updateUserIndexCardName);

router.get("/:userName/deleteCard/:cardId", DigitalCardController.deleteCard);

router.post("/:userName/updateCard/:cardId", DigitalCardController.updateDigitalCard);

router.post('/:userName/saveNewCard', DigitalCardController.createDigitalCard);
router.get('/:userName/getCardsIndex', DigitalCardController.getCardsIndex);

router.post('/:userName/copyCard', DigitalCardController.copyCard);



router.get('/:userName/getAllCards',(req,res)=>{

    DigitalCardController.getAllCards(req.params.userName).
    then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.send(err)
    })
});


module.exports = router;


