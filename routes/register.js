const express = require("express");
const router = express.Router();
const registerController = require("../controller/register");

router.post("/getAccessToken", registerController.getToken);
router.post("/checkPermission", registerController.checkPermission);
router.post("/checkUsername", registerController.usernameCheck);

module.exports = router;