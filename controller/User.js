const User = require('../models/User.js');


getUidByUserName = async (req, res) => {
    console.log("inside!!!!!!!!!!!!!!!!!")
    const userName = req.params.userName
    const user = await User.findOne({ username: userName })
    if (user)
        res.json({ "user": user })
    else
        res.json("undifined")

};

updateUserIndexCardName = async (req, res) => {
    console.log("index card name!!!!!!!!!!!!!!!!!")
    const userName = req.params.userName
    const user = await User.findOne({ username: userName })
    if (user) {
        user.cardIndexName= req.body.indexCardName
        let result = await user.save();
        res.send(result);
    }
    else
        res.json("undifined")
};

checkPermission = async (req, res, next) => {
    console.log("in checkPermission");
    let uId = req.originalUrl.split("/")[1];
    let redirectUrl = req.get('host')

    if (req.originalUrl.includes("/view/") || req.headers["authorization"] == "view") return next();
    if (req.originalUrl.includes("getUser")) return next();
    if (uId == "api") {
        uId = req.originalUrl.split("/")[2];
    }

    if (!req.headers["authorization"]) {

        if (req.cookies && req.cookies.jwt) req.headers["authorization"] = req.cookies.jwt;
        else
            res.redirect('https://leader.codes/login' + '?des=' + redirectUrl);
    }
    if (!uId) {
        console.log("no uid");
        res.redirect("https://leader.codes/login?des=files.leader.codes");
    } else {
        const options = {
            method: "GET",
            url: "https://api.leader.codes/isPermission",
            headers: { Authorization: req.headers["authorization"] },
        };
        request(options, (error, response, body) => {
            if (error) {
                console.log("error: ", error);
                res.redirect("https://leader.codes/login?des=files.leader.codes");
            } else {

                console.log("is authorize!!!!!");
                return next();
            }
        });
    }
};


module.exports = {
    getUidByUserName,
    updateUserIndexCardName,
    checkPermission,
}