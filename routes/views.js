const express = require('express');
const router = express.Router();
const path = require('path')

// SEND VIEW
router.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, "../build/index.html"))
});

// router.get('/:uId/:name', (req, res) => {
//     res.sendFile(path.join(__dirname, "../views/landingPage.html"))
// });

// router.post('/:uId/:name', (req, res) => {
//     res.sendFile(path.join(__dirname, "../views/landingPageUser.html"))
// });
module.exports = router;