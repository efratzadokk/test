const router = require('express').Router()
const path = require('path')
router.use(ssss)
function ssss(res, req, next) {
  console.log("loggwer");
  next()
}


router.get('/*', function (req, res) {
  console.log("uid");
  res.sendFile(path.join(__dirname, '../build', 'index.html'))

})

router.get('/card/*', function (req, res) {
  console.log("card id");
  res.sendFile(path.join(__dirname, '../build_preview/index.html'))

})


// router.get('/', function (req, res) {
//   res.sendfile(path.join(__dirname,  '../views/index.html'));
// });
// router.get('/:uid/:cardId', function (req, res) {
//   res.sendFile(path.join(__dirname, '../build_preview/index.html'))


// })

// router.get('/',(req,res)=>{
// res.sendFile(__dirname,'../build/index.html')
// })




module.exports = router