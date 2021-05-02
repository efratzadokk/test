const Lead = require('../models/Leads');


updateLead = (lead) => {
    return new Promise(async (resolve, reject) => {
        try {
            Lead.findByIdAndUpdate(
                lead._id,
                lead,
                { new: true },
                (err, n_lead) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    }
                    console.log(n_lead);
                    resolve(n_lead);
                }
            )
        } catch (error) {
            console.log("lead errore: -", error)
            reject(error);
        }
    });
}
module.exports = {
    updateLead
}