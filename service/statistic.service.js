const Statistic = require('../models/Statistics');
const repository = require('../repository/user.reposition');
getStatistic = (cardName) => {
    return new Promise(async (resolve, reject) => {
        try {
            let statistic = await repository.findObject(Statistic, { cardName: cardName, isDelete: false })
            resolve(statistic);
        }
        catch (err) {
            reject(err.message)
        }
    })
};

updateStatistic = (statistic) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (statistic._id !== null) {
                Statistic.findByIdAndUpdate(
                    statistic._id,
                    statistic,
                    { new: true },
                    (err, n_statistic) => {
                        if (err) {
                            console.log(err);
                            reject(err);
                        }
                        resolve(n_statistic);
                    }
                )
            }
            else {
                reject('error');
            }
        } catch (error) {
            console.log("statistic errore: -", error)
            reject(error);
        }
    });
}
setCntSocialMediaAndCall = (id, body) => {
    return new Promise(async (resolve, reject) => {
        try {
            let statistic = await repository.findObject(Statistic, { _id: id, isDelete: false })
            statistic.socialMediaCnt = body.cntSocial
            statistic.callMeCnt = body.cntCallMe
            await repository.save()
            resolve(statistic);
        }
        catch (err) {
            reject(err.message)
        }
    })
};

module.exports = {
    updateStatistic,
    setCntSocialMediaAndCall,
    getStatistic
}