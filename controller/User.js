const User = require('../models/User.js');


getUidByUserName = async (req, res) => {
    console.log("inside!!")
    const userName = req.params.userName
    console.log(userName)
    const user = await User.findOne({ username: userName })
    if (user)
        res.json({ "uid": user.uid })
};
 



module.exports = {
    getUidByUserName,
}