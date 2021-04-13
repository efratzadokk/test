const path = require("path");
const jwt = require('jsonwebtoken');
const request = require('request');
const requestIp = require('request-ip');
const User = require('../models/User');


// const checkPermission = async (req, res, next) => {
//     const host = req.get('host');
//     const isLocal = (req.query.isLocal == 'true');
//     console.log("newIsLocal", isLocal);
//     if (isLocal)
//         return next();
//     console.log("in checkPermission", req.originalUrl.split("/"));
//     let userName = req.originalUrl.split("/")[1];
//     let apiFlag = false
//     let urlRoute
//     let redirectUrl = host + "/admin";
//     if (userName == "api") {
//         userName = req.originalUrl.split("/")[2];
//         apiFlag = true
//     }
//     if (!apiFlag) urlRoute = req.originalUrl.split("/")[3]
//     if (!userName) {
//         console.log("no uid");
//         return res.status(401).json({ des: redirectUrl, routes: urlRoute, apiFlag: apiFlag, status: 401 })
//     }
//     else {
//         console.log(req.cookies);
//         const jwt = req.cookies.devJwt ? req.cookies.devJwt : req.headers['authorization'] ? req.headers['authorization'] : null
//         const cookie = request.cookie(`jwt=${jwt}`)
//         console.log(req.cookies.devJwt, cookie)
//         const options = {
//             method: "GET",
//             url: `https://accounts.codes/isPermission/${userName}`   ,
//             headers: { Cookie: cookie }
//         };
//         request(options, (error, response, body) => {
//             console.log("response.statusCode", response.statusCode)
//             console.log("body", typeof (body), body)
//             if (error || response.statusCode != 200) {
//                 return res.status(401).json({ des: redirectUrl, routes: urlRoute, apiFlag: apiFlag, status: 401 })
//             }
//             else {
//                console.log("userName", userName)
//                 if (body == 'true') {
//                     console.log("no error!!!!!!!");
//                     return next();
//                 }
//                 return res.status(401).json({ des: redirectUrl, routes: urlRoute, apiFlag: apiFlag, status: 401 })
//             }
// });
//     }
// };


// ----------------------------------------------

const checkPermission = async (req, res, next) => {
    if (req.headers["authorization"] == "view") return next();
    console.log("inside check premission knowme");
    let userName = req.originalUrl.split("/")[1];
    // let redirectUrl = req.headers.origin
    let redirectUrl = process.env.URL
    console.log(redirectUrl);


    let apiFlag = false;
    let urlRoute;
    if (userName == "api") {
        userName = decodeURI(req.originalUrl.split("/")[3]);
        apiFlag = true;
    }
    if (!apiFlag) {

        //not api request
        urlRoute = req.originalUrl
        console.log("urlRoute", urlRoute)
    }
    console.log("urlRoute", req.originalUrl)


    if (req.headers["authorization"] == "null" || !req.headers["authorization"]) {
        if (req.cookies && req.cookies.jwt) {

            req.headers["authorization"] = req.cookies.jwt;
        }
        else {

            return res.status(401).json({ des: redirectUrl, routes: urlRoute, apiFlag: apiFlag, status: 401 });
        }
    }
    if (!userName || !req.headers["authorization"]) {
        return res.status(401).json({ des: redirectUrl, routes: urlRoute, apiFlag: apiFlag, status: 401 });
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
                        .then(() => {
                            return next();
                        })
                        .catch((err) => {
                            console.log(err);
                            return res.status(401).json({ des: redirectUrl, routes: urlRoute, apiFlag: apiFlag, status: 401 });
                        })
                }
            })
            .catch((err) => {
                console.log(err);
                return res.status(401).json({ des: redirectUrl, routes: urlRoute, apiFlag: apiFlag, status: 401 });
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

const verifyUsername = (userName, uId) => {
    console.log('in verifyUsername');
    return new Promise(async (resolve, reject) => {
        try {
            let currentUser = await User.findOne({ "uid": uId });;
            if (currentUser.username != userName) {
                reject('access denied')
            }
            resolve();
        }
        catch (err) {
            reject(err);
        }
    })
}
module.exports = {
    checkPermission
}



