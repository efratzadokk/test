
const repository = require('../repository/repository');

getUidByUserName = (userName) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await repository.findObject(User, { username: userName })
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
            const user = await repository.findObject(User, { username: userName })
            user.cardIndexName = indexCardName
            let result = await repository.saveObject(user);
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