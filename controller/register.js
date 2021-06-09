const User = require('../models/User');
const request = require('request');


const cheakPremission = async (req, res) => {
    let currentUser = await User.findOne({ username: req.params.userName })
    console.log("username----------------", req.params.userName);

    if (!currentUser) {
        currentUser = new User();
        console.log("", currentUser);
        console.log("----currentUser--", currentUser);
    }
    const jwt = req.cookies.devJwt ? req.cookies.devJwt : req.headers['authorization'] ? req.headers['authorization'] : null
    console.log("jwt----------------", jwt)
    const cookie = request.cookie(`jwt=${jwt}`)
    const options = {
        method: "GET",
        url: `${process.env.BASE_LOGIN_URL}/api/${req.params.userName}`,
        headers: { Cookie: cookie }
    };
    request(options, async (error, response, body) => {
        console.log("response.statusCode", response.statusCode)
        if (error || response.statusCode != 200) {
            return res.send(response.statusCode);
        }
        else {
            console.log("userName", req.params.userName)
            currentUser.username = req.params.userName;
            currentUser.email = JSON.parse(body).user.email;
            currentUser.imgProfile = JSON.parse(body).user.imgProfile;
            currentUser.uid = JSON.parse(body).user.uid;
            if (JSON.parse(body).user.displayName !== undefined) {
                currentUser.displayName = JSON.parse(body).user.displayName;
            }
            await currentUser.save();
            return res.status(200).json({ user: currentUser });
        }

    });
}

module.exports = {
    cheakPremission
}