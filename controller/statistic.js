const Statistic = require('../models/Statistics');


updateStatistic = (statistic) => {
    return new Promise(async (resolve, reject) => {
        try {
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
        } catch (error) {
            console.log("statistic errore: -", error)
            reject(error);
        }
    });
}

module.exports = {
    updateStatistic
}