const dotenv = require('dotenv');
const firebase = require('firebase');
const jwt = require('jsonwebtoken');
const admin = require('firebase-admin');
const path = require('path')
const mongoose = require('mongoose')
const User = require('../models/User');
const request = require('request');
const requestIp = require('request-ip');

const firebaseConfig = {
    apiKey: "AIzaSyDK4XGnKfHz_rKMKKNU5oix6BJJfDsmGrM",
    authDomain: "knowme-page-dev.firebaseapp.com",
    projectId: "knowme-page-dev",
    storageBucket: "knowme-page-dev.appspot.com",
    messagingSenderId: "474755504683",
    appId: "1:474755504683:web:4782fa2eb9c2c4acc2286e",
    measurementId: "G-71ZR37P1C5"
  };

  
// var firebaseConfig = {
//     apiKey: "AIzaSyBG4FbB6eBy-U665nLOA_153D0YE-gSV9k",
//     authDomain: "knowmepage.firebaseapp.com",
//     projectId: "knowmepage",
//     storageBucket: "knowmepage.appspot.com",
//     messagingSenderId: "74025733902",
//     appId: "1:74025733902:web:a737a1219326a4d3fc115f",
//     measurementId: "G-RMEN31486N"
//   };
  
  
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

const insertIfExsist = async(userEmail) => {
    return new Promise(async(resolve, reject) => {

        await User.find({ email: userEmail }, async(err, users) => {
            if (users.length) {
                resolve({ message: 'user exists' });
                numSessions++;
                return;
            }
            const user = new User({
                _id: new mongoose.Types.ObjectId(),
                email: userEmail,
                uid:uid,
                username:""
            })
            let success = await user.save();
            if (success) {  
                       
                resolve({ message: 'user added successfully' });
            }
        })
    })
}

const verify = (req, res, next) => {
    return new Promise((resolve, reject) => {
        let token = (typeof req === "object") ? req.body.token : req
        if(!token){
            token=req.cookies.accessToken
        }
        decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        if (!decoded) reject("access deiend")
        resolve(decoded)
    })
}

const createLeaderJwt = (req, res) => {
    const clientIp = requestIp.getClientIp(req);
    accessToken = jwt.sign({ uid: uid, email: email, ip: clientIp }, process.env.ACCESS_TOKEN_SECRET);
}

const checkPermission = async(req, res) => {
    console.log('in checkPermission')
    verify(req).then((decodedToken) => {
        uid = decodedToken.uid
        email = decodedToken.email
            // ip = decodedToken.ip
    })
    try{
    insertIfExsist(email).then(async(result) => {
        if (result.message) {
            console.log("inside if "+result.message)
            const usernamePresent = await usernameExistCheck(uid)
            console.log("usernamePresent "+usernamePresent)
            console.log("inside if "+userName)
             jsonWebToken = req.headers["authorization"]
            return res.status(200).json({
                "jwt": jsonWebToken,
                "uid": uid,
                "redirectUrl": req.redirectUrl,
                "is_username": usernamePresent,
                "userName":userName
            })
        }
    }).catch((err) => {
        res.status(500).send(err)

    })
}
catch(err)
{
    res.status(500).send(err)
}
}


const usernameExistCheck = async (uid) => {
    console.log(uid,"+++++++++")
    return new Promise(async(s, j) => {
      await  User.find({ uid: uid }, (err, $) => {
            console.log("$",$)
            if($.length)
           {
               if($[0].username=="")
              {
                  console.log("in $[0].username==''")
                userName=""
                  s(false)
              }
              else{
                console.log("in $[0].username!=''")
                userName= $[0].username
                s(true)
               }
              }  
         else{
             j("temporary error, please try again later.")
         }
            // const r = $.username ? true : false
            // s(r);
        })
    })
    // return new Promise(async(s, j) => {
     //   User.find({ uid: uid, username: {$exists: true} }, (err, $) => { 
    //         if($)
    //        {console.log("+++++",$,$.username)
    //            userName= $.username
    //            const r=  $.username==""? true : false
    //            s(r)
    //         }
    //        else{
    //            userName=""
    //        }
    //        // const r = $.username? true : false
    //         s(false);
    //     })
    // })
}
const usernameExistCheck2 = (uid) => {

}

const usernameCheck = async(req, res) => {
    console.log("in usernameCheck");
     usernameToCheck = req.body.usernameToCheck
    console.log('username to check' + usernameToCheck)
    const decodedToken = await verify(req)
    const uid = decodedToken.uid
    User.find({ username: usernameToCheck }, async(err, users) => {
        if (users.length) {
            consolr.log("in users.length == true")
            return res.json({availability: false,userName:usernameToCheck})
        }

        if(err){
            console.log("errorrrrr = " + err);
        }

        User.findOneAndUpdate({'uid' : uid}, {'username' : usernameToCheck}, {upsert: true}, function(err, doc) {
            if (err) {
                console.log("errorrrrr = " + err);
                return res.json({error: err});
            }
            else
           {
               sendWelcomeEmail(uid)
                return res.json({
                availability : true, uid: uid,userName:usernameToCheck})}
        });

        // User.update({'uid' : uid},{'username' : usernameToCheck})
        // res.json({availability: true})
    })
}

const sendWelcomeEmail = async(uid) => {
    // const jwt = req.headers.authentication;
    // console.log("jwt", jwt);
    const Cuser = await User.findOne({ uid: uid });
    // const userName = 'chavi'
    const conversation = { subject: 'thank you for choosing leader codes' }
    const wave = {
        //  body: '<h1>hi ' + userName + '</h1>' +
        body: '<h1>hi '+usernameToCheck+'</h1>' +
            '<h2> thank you for choosing leader, you can click ' + '<a href="https://leader.codes/login#">here </a> to login to you account </h2>' +

            '<h2> -leader.codes- </h2>'
    };
    const from="NoReplay"
    const sendEmailToUser = true;
    request.post('https://box.leader.codes/api/' + Cuser.uid + '/conversation/saveConversationGlobal', {
        json: { conversation, wave, sendEmailToUser,from },
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
    console.log("getToken register");

    console.log("register req.token: " + req.body.jwt);

    admin.auth().verifyIdToken(req.body.jwt)
        .then(function(decodedToken) {
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
        }).catch(function(error) {
            console.log("error: " + error)
            res.status(500)
        });
}

const getUidFromToken = async(token) => {
    const decodedToken = await verify(token)
    const uid = decodedToken.uid
    return uid
}

module.exports = {
    getToken,
    checkPermission,
    usernameCheck,
    getUidFromToken,
    usernameExistCheck
<<<<<<< HEAD

=======
>>>>>>> 8d2163eb87c06a2006ff01fe9bc27cafd13d8523
}