<<<<<<< HEAD
const express = require("express");
const router = express.Router();
const registerController = require("../controller/register");

router.post("/getAccessToken", registerController.getToken);
router.post("/checkPermission", registerController.checkPermission);
router.post("/checkUsername", registerController.usernameCheck);

=======
const express = require("express");
const router = express.Router();
const registerController = require("../controller/register");

router.post("/getAccessToken", registerController.getToken);
router.post("/checkPermission", registerController.checkPermission);
router.post("/checkUsername", registerController.usernameCheck);

>>>>>>> ff2334798b38820118d9fe89fa6a7d6a24f235aa
module.exports = router;