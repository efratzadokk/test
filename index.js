const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const cors = require('cors')
const bodyParser = require('body-parser')
const fileUpload = require("express-fileupload");
const path = require('path');
const request = require('request');
const app = express();

dotenv.config();



const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
const routeProtectedApi = require('./routes/api/protected');
const routePublicApi = require('./routes/api/public');
const routeToViews = require('./routes/view/views');
const auth = require('./controller/auth');


app.use(cors());
app.use(cookieParser())
app.use(fileUpload({ createParentPath: true }));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));


mongoose.connect(process
    .env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

app.use("/api/admin", auth.checkPermission, routeProtectedApi);
app.use("/api/public", routePublicApi);
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