const express = require('express');
const router = require('express').Router()
const path = require('path')
//const app = express();

router.get('/wizard', function (req, res) {
  console.log("uid");
  res.sendFile(path.join(__dirname, '../views/wizard.html'))

})

router.get('/card/*', function (req, res) {
  router.use(express.static(path.join(__dirname, '../build')));
  res.sendFile(path.join(__dirname, '../build', 'index.html'))
})

router.get('/:userName', function (req, res) {
  router.use(express.static(path.join(__dirname, '../build')));
  res.sendFile(path.join(__dirname, '../build', 'index.html'))
})
router.get('/:userName/AllCards', function (req, res) {
  router.use(express.static(path.join(__dirname, '../build')));
  res.sendFile(path.join(__dirname, '../build', 'index.html'))
})
router.get('/', function (req, res) {
  console.log("home")
  router.use(express.static(path.join(__dirname, '../front/build')))
  res.sendFile(path.join(__dirname, '../front/build/index.html'))
})



  




// router.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, '../build', 'index.html'))
// })





module.exports = router