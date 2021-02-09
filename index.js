const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const cors = require('cors')
const bodyParser = require('body-parser')
const fileUpload = require("express-fileupload");
const path = require('path')
const request = require('request');
const app = express();

dotenv.config();

const routeToApi = require('./routes/api');
const routeToViews = require('./routes/views');
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
const registerRouter = require("./routes/register.js");
const auth = require('./controller/auth');

app.use(cors());
app.use(cookieParser())
app.use(fileUpload({ createParentPath: true }));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));



app.get((req, res, next) => {
    console.log('BOO')
})

mongoose.connect(process
    .env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
app.use('/register', registerRouter);

app.use("/api/digitalcard", auth.checkPermission, routeToApi);

app.use("/", routeToViews);

app.all("/*", function (req, res, next) {
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
app.listen(process
    .env.PORT, (err) => {
    console.log("server is up!!!!!");
});