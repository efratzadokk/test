const express = require("express");
const router = express.Router();
const landingPageController = require("../controller/landingPage.js");

router.get('/getAllFunnels/:userId',landingPageController.getAllFunnelsByUserId);
router.get('/getUser/:userName', landingPageController.getUidByUserName)
router.delete('/deleteFunnel/:funnelId', landingPageController.deleteFunnelById)
router.post("/createFunnel/:uId/:funnelName", landingPageController.createFunnel);//////////good


// router.post("/:uId/submit", landingPageController.submit);
// router.put("/updateViewers", landingPageController.updateViewers);
// router.get("/:uId/getEmail", l

// router.post("/duplicateLandingPage/:uId/:landingPageId",landingPageController.duplicateLandingPage);
// router.post("/upload/file/yyyy", landingPageController.uploadedFile);

// router.get("/:uId", landingandingPageController.getUserEmail);
// router.get("/:uId/:name", landingPageController.getLandingPageDetails);



router.get("/getFunnelByName/:uId/:funnelName", landingPageController.getFunnelByName);
router.post("/updateFunnelDetails/:uId/:funnelId",landingPageController.updateFunnelDetails)
router.post('/duplicateFunnel/:funnelId', landingPageController.duplicateFunnelById)

// router.post("/:uId/:name", landingPageController.updateLandingPageDetails);
// router.delete("/removeLandingPage/:uId/:LandingPageId", landingPageController.removeLandingPage);
// router.post("/saveUser",saveUser)
// PageController.getLandingPages);

// router.get('/getAllFunnels/:userId',landingPageController.gggg)

module.exports = router;
