
const User = require('../repository/User.reposition');

getUidByUserName = (userName) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await User.findObject(User, { username: userName })
            resolve(user);
        }
        catch (err) {
            reject(err.message)
        }
    })
};

updateUserIndexCardName = (userName,indexCardName) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await User.findObject(User, { username: userName })
            user.cardIndexName = indexCardName
            let result = await User.save(user);
            resolve(result);
        }
        catch (err) {
            reject(err.message)
        }
    })
};



module.exports = {
    getUidByUserName,
    updateUserIndexCardName,
}