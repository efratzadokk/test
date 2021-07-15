const express = require("express");
const router = express.Router();
const landingPageController = require("../controller/landingPage.js");

const funnel=require("../controller/funnel.controller")
const user=require("../controller/user.controller")

router.get('/getAllFunnels/:userId',funnel.getAllFunnelsByUserId);
router.get('/getUser/:userName', user.getUidByUserName)
router.delete('/deleteFunnel/:funnelId', funnel.deleteFunnelById)
router.post("/createFunnel/:uId/:funnelName", funnel.createFunnel);//////////good


// router.post("/:uId/submit", landingPageController.submit);
// router.put("/updateViewers", landingPageController.updateViewers);
// router.get("/:uId/getEmail", l

// router.post("/duplicateLandingPage/:uId/:landingPageId",landingPageController.duplicateLandingPage);
// router.post("/upload/file/yyyy", landingPageController.uploadedFile);

// router.get("/:uId", landingandingPageController.getUserEmail);
// router.get("/:uId/:name", landingPageController.getLandingPageDetails);



router.get("/getFunnelByName/:uId/:funnelName", funnel.getFunnelByName);
router.post("/updateFunnelDetails/:uId/:funnelId",funnel.updateFunnelDetails)
router.post('/duplicateFunnel/:funnelId', funnel.duplicateFunnelById)

// router.post("/:uId/:name", landingPageController.updateLandingPageDetails);
// router.delete("/removeLandingPage/:uId/:LandingPageId", landingPageController.removeLandingPage);
// router.post("/saveUser",saveUser)
// PageController.getLandingPages);

// router.get('/getAllFunnels/:userId',landingPageController.gggg)

module.exports = router;
