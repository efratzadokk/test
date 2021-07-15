// const common = require('@leadercodes/modelsnpm');
// const User = common.models.user;
const service = require('../services/user.service')

//good
getUidByUserName = async (req, res) => {
    try {
        const userName = req.params.userName
        console.log(userName)
        const user = await service.getUidByUserName(userName)
        if (user)
            res.status(200).json({ "user": user })
    }
    catch (err) {
        res.status(500).send(err.message)
    }
}
module.exports = {
    getUidByUserName
};