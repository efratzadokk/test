const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const app = express();
const routeToApi=require('./routes/api')
const routeToViews = require('./routes/views')

dotenv.config();
app.use(cors())

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use((req, res, next) => { // DEBUG BY ROI... PLEASE REMOVE THIS 
    console.log('*****************')
    console.log(req.url)
    console.log('*****************')
    next()
})

app.use("/card/", express.static(path.join(__dirname, './build_preview')));
app.use("/login", express.static(path.join(__dirname, './views')));
app.use("/", express.static(path.join(__dirname, './build')));


mongoose.connect(process
    .env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
app.use('/api/digitalcard', routeToApi)
app.use('/', routeToViews)

app.all("/*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Accept,X-Access-Token,X-Key,Authorization,X-Requested-With,Origin,Access-Control-Allow-Origin,Access-Control-Allow-Credentials');
    if (req.method === 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});


console.log("is new!!!");
app.listen(4000, (err) => {
    console.log("server is up!!!!!");
});