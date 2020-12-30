const path = require("path");
const jwt = require('jsonwebtoken');
const requestIp = require('request-ip');

const checkPermission = async(req, res, next) => {
    console.log("inside check premission leader");
    console.log(req.get('host')+req.originalUrl);
    // if (req.originalUrl == "/")
    //     return res.sendFile(path.join(__dirname, "./homePage/home.html"));
    // if (req.headers["authorization"] == "view")
    //     return next();
    // if (req.originalUrl.includes("assets") || req.originalUrl.includes("payment")||req.originalUrl.includes("wizard")||req.originalUrl.includes("model")||req.originalUrl.includes("unSubscribeAsking")||req.originalUrl.includes("unSubscribe")||req.originalUrl.includes("unSubscribeCancel")) {
        
    //     return next()
    // }
    // if (req.body && req.body.action == "firebaseloginwithcredentials" || req.body && req.body.action == "loginCheckPermission") {
    //     console.log(req.body)
    //     return next();
    //}
    if (req.headers["authorization"]) {
        console.log('in if authorization');
        verifyToken(req.headers["authorization"])
            .then((varifyResult) => {
                if (varifyResult) {
                    let jwtFirstIp = varifyResult.ip
                    let currentClientIp = requestIp.getClientIp(req);
                    console.log(jwtFirstIp, currentClientIp)
                        // if (jwtFirstIp != currentClientIp)
                        //     return res.sendFile(path.join(__dirname, "./Login/views/index.html"));
                    //req.redirectUrl = redirectUrl;
                    let uId = varifyResult.uid
                    req.uId = uId
                    return next();
                }
            })
            .catch((err) => {
                console.log(err);
               return res.sendFile(path.join(__dirname, "../build/index.html"));
            });
    } else {
        return res.sendFile(path.join(__dirname, "../build/index.html"));

    }
};

const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        console.log("inside varify of leader ");
        console.log("token", token);
        let decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        if (!decoded) reject("access deiend");
        console.log("decoded " + JSON.stringify(decoded));
        resolve(decoded);
    });
};

module.exports = {
    checkPermission
}