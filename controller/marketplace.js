const Marketplace = require('../models/Marketplace.js');



checkUniqueMarketName = async (req, res) => {
    let marketName = req.body.marketName;
    let id = req.body.id;
    try {
        let market = await Marketplace.findOne({ marketName: marketName, isDelete: false })
        if (market && market._id != id) {
            return res.send(false)
        }

        res.send(true);
    } catch (err) {
        res.send(err);
    }
}


module.exports = {
    checkUniqueMarketName,
}