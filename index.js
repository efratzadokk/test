const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const cors = require('cors')
const bodyParser = require('body-parser')
const fileUpload = require("express-fileupload");
const path = require('path')
const request = require('request');
const app = express();
const routeToApi = require('./routes/api');
const routeToViews = require('./routes/views');
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
const registerRouter = require("./routes/register.js");
const auth = require('./controller/auth');

dotenv.config();
app.use(cors());
app.use(cookieParser())

app.use(fileUpload({ createParentPath: true }));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));


app.use('/register', registerRouter);

 app.use("/login", express.static(path.join(__dirname, './views')));
 app.use("/wizard", express.static(path.join(__dirname, './views/wizard')));
// app.use("/", express.static(path.join(__dirname, './build')));

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
// checkPermission = async (req, res, next) => {
//     console.log("in checkPermission", req.originalUrl.split("/"));
//     let uId = req.originalUrl.split("/")[1];
//     let redirectUrl = req.get('host')
//     if (req.originalUrl.includes("/view/") || req.headers["authorization"] == "view") return next();
//     if (req.originalUrl.includes("getUser")) return next();
//     if (req.originalUrl.includes("getCategories")) return next();
//     if (req.originalUrl.includes("card")) return next();
//     if (uId == "api") {
//         uId = req.originalUrl.split("/")[3];
//     console.log("uId", uId);

//     }
//     console.log(!req.headers["authorization"])
//     if (!req.headers["authorization"]) {

//         if (req.cookies && req.cookies.jwt) req.headers["authorization"] = req.cookies.jwt;
//         // else
//         //     res.redirect('https://app.knowme.page/login');
//     }
//     console.log("headers",req.headers["authorization"]);
//     console.log("coockie",req.cookies,req.cookies?req.cookies.jwt:null);
//     if (!uId ||!req.headers["authorization"]) {
//         console.log("no uid");
//         res.redirect("https://knowme.page/login");
//     } else {
//         const options = {
//             method: "GET",
//             url: "https://api.leader.codes/isPermission",
//             headers: { Authorization: req.headers["authorization"] },
//         };
//         request(options, (error, response, body) => {
//             console.log("response.statusCode", response.statusCode)
//             console.log("body", typeof (body), body)
//             if (error || response.statusCode != 200) {
//                 console.log("error: ", error);
//                 res.redirect("https://knowme.page/login");
//             } else {

//                 console.log("is authorize!!!!!");
//                 return next();
//             }
//         });
//     }
// };

// app.use("/api/digitalcard",routeToApi);
app.use("/api/digitalcard", auth.checkPermission, routeToApi);
app.use("/", routeToViews);
// app.use("/", checkPermission, routeToViews);

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