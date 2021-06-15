const request = require('request');

const User = require('../models/User');


const checkPermission = async (req, res, next) => {
    const host = req.get('host');
    console.log("in checkPermission", req.originalUrl.split("/"));
    let userName = req.originalUrl.split("/")[1];
    let apiFlag = false
    let urlRoute
    let redirectUrl = host + "/admin";
    if (userName == "api") {
        userName = req.originalUrl.split("/")[3];
        apiFlag = true
    }
    if (!apiFlag) urlRoute = req.originalUrl.split("/")[3]
    if (!userName) {
        console.log("no uid");
        return res.status(401).json({ des: redirectUrl, routes: urlRoute, apiFlag: apiFlag, status: 401 })
    }
    else {
        console.log(req.cookies);
        const jwt = req.cookies && req.cookies.devJwt ? req.cookies.devJwt : req.headers['authorization'] ? req.headers['authorization'] : null
        const cookie = request.cookie(`jwt=${jwt}`)
        console.log(req.cookies.devJwt, cookie)
        const options = {
            method: "GET",
            url: `${process.env.BASE_LOGIN_URL}/isPermission/${userName}`   ,
            headers: { Cookie: cookie }
        };
        request(options, (error, response, body) => {
            console.log("response.statusCode", response.statusCode)
            console.log("body", typeof (body), body)
            if (error || response.statusCode != 200) {
                return res.send(response.statusCode||error)
            }
            else {
               console.log("userName", userName)
                if (body == 'true') {
                    console.log("no error!!!!!!!");
                    return next();
                }
                return res.status(401).json({ des: redirectUrl, routes: urlRoute, apiFlag: apiFlag, status: 401 })
            }
});
    }
};
module.exports = {
    checkPermission
}



