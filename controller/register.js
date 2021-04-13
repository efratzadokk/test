const dotenv = require('dotenv');
const firebase = require('firebase');
const jwt = require('jsonwebtoken');
const admin = require('firebase-admin');
const path = require('path')
const mongoose = require('mongoose')
const User = require('../models/User');
const request = require('request');
const requestIp = require('request-ip');

const firebaseConfigDev = {
    apiKey: "AIzaSyDK4XGnKfHz_rKMKKNU5oix6BJJfDsmGrM",
    authDomain: "knowme-page-dev.firebaseapp.com",
    projectId: "knowme-page-dev",
    storageBucket: "knowme-page-dev.appspot.com",
    messagingSenderId: "474755504683",
    appId: "1:474755504683:web:4782fa2eb9c2c4acc2286e",
    measurementId: "G-71ZR37P1C5"
};

const firebaseConfigProd = {
    apiKey: "AIzaSyBG4FbB6eBy-U665nLOA_153D0YE-gSV9k",
    authDomain: "knowmepage.firebaseapp.com",
    projectId: "knowmepage",
    storageBucket: "knowmepage.appspot.com",
    messagingSenderId: "74025733902",
    appId: "1:74025733902:web:a737a1219326a4d3fc115f",
    measurementId: "G-RMEN31486N"
};

const env = process.env.BASE_URL;
const firebaseConfig = env === 'http://localhost:4000' ? firebaseConfigDev : firebaseConfigProd;



firebase.initializeApp(firebaseConfig);
admin.initializeApp(firebaseConfig);

let uid;
let email;
let ip;
let accessToken;
let jsonWebToken
let numSessions = 0;
let usernameToCheck
let userName;

const insertIfExist = async (userEmail) => {
    console.log("in insertIfExist")

    return new Promise(async (resolve, reject) => {

        await User.find({ email: userEmail }, async (err, users) => {
            if (users.length) {
                console.log(users[0])
                numSessions++;
                console.log("user exist")
                resolve({ user: users[0] });
            }
            else {
                const user = new User({
                    _id: new mongoose.Types.ObjectId(),
                    email: userEmail,
                    uid: uid,
                    username: ""
                })
                let userFromDB = await user.save();
                if (userFromDB) {

                    console.log("user added successfully")
                    resolve({ user: userFromDB });
                }
            }

            //reject("err")
        })
    })
}

const verify = (req, res, next) => {
    console.log("in verify")
    return new Promise((resolve, reject) => {
        let token = (typeof req === "object") ? req.body.token : req
        if (!token) {
            token = req.cookies.accessToken
        }
        console.log("token")

        decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        if (!decoded) reject("access deiend")
        resolve(decoded)
    })
}

const createLeaderJwt = (req, res) => {
    const clientIp = requestIp.getClientIp(req);
    accessToken = jwt.sign({ uid: uid, email: email, ip: clientIp }, process.env.ACCESS_TOKEN_SECRET);
}

const checkPermission = async (req, res) => {
    console.log('in checkPermission')
    decodedToken = await verify(req)

    uid = decodedToken.uid
    email = decodedToken.email

    console.log("verify")

    try {
        console.log("in try")

        let result = await insertIfExist(email)
        console.log("result " + result.user)
        if (result.user) {
            console.log("inside if " + result.user.uid)
            const usernamePresent = await usernameExistCheck(result.user.uid)

            console.log("usernamePresent " + usernamePresent)
            console.log("inside if " + userName)
            jsonWebToken = req.headers["authorization"]

            return res.status(200).json({
                "jwt": jsonWebToken,
                "uid": result.user.uid,
                "redirectUrl": req.redirectUrl,
                "is_username": usernamePresent,
                "userName": userName
            });
        }
    }

    catch (err) {
        res.status(500).send(err)
    }
}


const usernameExistCheck = async (uid) => {
    console.log(uid, "+++++++++")
    return new Promise(async (resolve, reject) => {
        await User.find({ uid: uid }, (err, $) => {
            console.log("$", $)
            if ($.length) {
                console.log("$2", $)
                if ($[0].username == "") {
                    console.log("in $[0].username==''")
                    userName = ""
                    resolve(false)
                }
                else {
                    console.log("in $[0].username!=''")
                    userName = $[0].username
                    resolve(true)
                }
            }
            else {
                console.log("jjjjjjjjjjj")
                reject("temporary error, please try again later.")
            }

        })
    })

}


const usernameCheck = async (req, res) => {
    console.log("in usernameCheck");
    usernameToCheck = req.body.usernameToCheck
    console.log('username to check ' + usernameToCheck)
    const decodedToken = await verify(req)
    const uid = decodedToken.uid


    User.find({ username: { $regex: new RegExp(`^${usernameToCheck}*$`, "i") } }, async (err, users) => {

        if (users.length) {
            console.log("in users.length == true", users)
            return res.json({ availability: false, userName: usernameToCheck })
        }

        if (err) {
            console.log("errorrrrr = " + err);
        }

        User.findOneAndUpdate({ 'uid': uid }, { 'username': usernameToCheck }, { upsert: true }, function (err, doc) {
            if (err) {
                console.log("errorrrrr = " + err);
                return res.json({ error: err });
            }
            else {
                sendWelcomeEmail(uid)
                return res.json({
                    availability: true, uid: uid, userName: usernameToCheck
                })
            }
        });

        // User.update({'uid' : uid},{'username' : usernameToCheck})
        // res.json({availability: true})
    })
}

const sendWelcomeEmail = async (uid) => {
    // const jwt = req.headers.authentication;
    // console.log("jwt", jwt);
    const Cuser = await User.findOne({ uid: uid });
    // const userName = 'chavi'
    const conversation = { subject: 'thank you for choosing leader codes' }
    const wave = {
        //  body: '<h1>hi ' + userName + '</h1>' +
        body: '<h1>hi ' + usernameToCheck + '</h1>' +
            '<h2> thank you for choosing leader, you can click ' + '<a href="https://leader.codes/login#">here </a> to login to you account </h2>' +

            '<h2> -leader.codes- </h2>'
    };
    const from = "NoReplay"
    const sendEmailToUser = true;
    request.post('https://box.leader.codes/api/' + Cuser.uid + '/conversation/saveConversationGlobal', {
        json: { conversation, wave, sendEmailToUser, from },
        headers: { authentication: jsonWebToken }
    }, (error, res, body) => {
        console.log("arrive to saveConversationGlobal");

        if (error) {
            console.error(error)
            return
        }

    })
}
const getToken = (req, res) => {


    console.log("register req.token: " + req.body.jwt);

    admin.auth().verifyIdToken(req.body.jwt)
        .then(function (decodedToken) {
            var token = req.body.jwt
            uid = decodedToken.uid;
            email = decodedToken.email;
            createLeaderJwt(req, res);
            console.log("after create jwt");
            console.log("access token " + accessToken)
            res.setHeader('Set-Cookie', `accessToken=${accessToken}; HttpOnly`, 'domain = leader.codes');
            return res.status(200).json({
                accessToken
                //email
            })
        }).catch(function (error) {
            console.log("error: " + error)
            res.status(500)
        });
}

const getUidFromToken = async (token) => {
    const decodedToken = await verify(token)
    const uid = decodedToken.uid
    return uid
}

const getUserNameByEmail = (req, res) => {

    console.log("$$$$$$$$$$$$$$$$$$$$$$")

    User.findOne({ email: req.query.email }, (err, user) => {

        if (err) {
            console.log("error: " + err)
            res.status(500)
        }
        console.log("user: " + user)
        res.status(200).json(user)

    });
}



const newCheakPremission = async (req, res) => {
    let currentUser = await User.findOne({ username: req.params.userName })
    if (!currentUser) {
        let newUser = new User();
        const jwt = req.cookies.devJwt ? req.cookies.devJwt : req.headers['authorization'] ? req.headers['authorization'] : null
        const cookie = request.cookie(`jwt=${jwt}`)
        const options = {
            method: "GET",
            url: `https://accounts.codes/api/${req.params.userName}`,
            headers: { Cookie: cookie }
        };
        request(options, (error, response, body) => {
            console.log("response.statusCode", response.statusCode)
            if (error || response.statusCode != 200) {
                return res.status(401).json({ des: redirectUrl, routes: urlRoute, apiFlag: apiFlag, status: 401 })
            }
            else {
                console.log("userName", req.params.userName)
                newUser.username = req.params.userName;
                newUser.email = body.user.email
                newUser.save();
            }

        });
    }
    res.status(200).send()
}

module.exports = {
    getUserNameByEmail,
    getToken,
    checkPermission,
    usernameCheck,
    getUidFromToken,
    usernameExistCheck,
    newCheakPremission
}