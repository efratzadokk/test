const path = require("path");
const jwt = require('jsonwebtoken');
const requestIp = require('request-ip');
const User = require('../models/User');

const checkPermission = async (req, res, next) => {
    if (req.headers["authorization"] == "view") return next();
    console.log("inside check premission knowme");
    let userName = req.originalUrl.split("/")[1];
    let redirectUrl = req.get('host');
    let apiFlag = false;
    let urlRoute;
    if (userName == "api") {
        userName = req.originalUrl.split("/")[3];
        apiFlag=true;
    }
    if(!apiFlag) //not api request
        urlRoute=req.originalUrl.split("/")[3]
    if (req.headers["authorization"]=="null"||!req.headers["authorization"]) {
        if (req.cookies && req.cookies.jwt) {
            req.headers["authorization"] = req.cookies.jwt;
        }
        else{
            return res.status(401).json({des:redirectUrl,routes:urlRoute, apiFlag:apiFlag,status:401});
        }
    }
    if (!userName ||!req.headers["authorization"]) { 
        return res.status(401).json({des:redirectUrl,routes:urlRoute, apiFlag:apiFlag,status:401});
    }
    else {//if authorization
        console.log('in if authorization');
        verifyToken(req.headers["authorization"])
            .then((verifyResult) => {
                if (verifyResult) {
                    let jwtFirstIp = verifyResult.ip
                    let currentClientIp = requestIp.getClientIp(req);
                    console.log(jwtFirstIp, currentClientIp)
        
                    let uId = verifyResult.uid;
                    req.uId = uId;
                    verifyUsername(userName, uId)
                        .then(()=>{
                            return next();
                        })
                        .catch((err)=>{
                            console.log(err);
                            return res.status(401).json({des:redirectUrl,routes:urlRoute, apiFlag:apiFlag,status:401});
                        })
                }
            })
            .catch((err) => {
                console.log(err);
                return res.status(401).json({des:redirectUrl,routes:urlRoute, apiFlag:apiFlag,status:401});
            }
        );
    }
}

const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        console.log("inside verify of leader ");
        console.log("token", token);
        let decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        if (!decoded) reject("access denied");
        console.log("decoded " + JSON.stringify(decoded));
        resolve(decoded);
    });
};

const verifyUsername =  (userName, uId) => {
    console.log('in verifyUsername');
    return new Promise(async (resolve, reject)=>{
        try {
            let currentUser = await User.findOne({ "uid": uId });;
            if(currentUser.username != userName){
                reject('access denied')
            }
            resolve();
        }
        catch( err ){
            reject(err);
        }
    })
}

module.exports = {
    checkPermission
}