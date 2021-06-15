const Statistic = require('../models/Statistics');
const repository = require('../repository/repository');
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
                let statisticUpdate = repository.findObjectByIdAndUpdate(Statistic,
                    statistic._id,
                    [statistic, { new: true }])

                if (statisticUpdate)
                    resolve(statisticUpdate);
                else {
                    reject(err);
                }
            }
            else {
                reject('error');
            }
        } catch (error) {
            reject(error.message);
        }
    });
}
setCntSocialMediaAndCall = (id, body) => {
    return new Promise(async (resolve, reject) => {
        try {
            let statistic = await repository.findObject(Statistic, { _id: id, isDelete: false })
            statistic.socialMediaCnt = body.cntSocial
            statistic.callMeCnt = body.cntCallMe
            await repository.saveObject(statistic)
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