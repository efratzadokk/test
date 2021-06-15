const Lead = require('../models/Leads');
const repository = require('../repository/repository');
        
updateLead = (lead) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (lead._id !== null) {
                let leadUpdate = repository.findObjectByIdAndUpdate(Lead,
                    lead._id,
                    [lead, { new: true }])

                if (leadUpdate)
                    resolve(leadUpdate);
                else {
                    reject('error');
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
module.exports = {
    updateLead
}