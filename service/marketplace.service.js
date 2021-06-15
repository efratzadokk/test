const Marketplace = require('../models/marketplace.js');
const User = require('../models/User');
const Card = require('../models/Card');
// const { findOne } = require('../models/marketplace.js');
const repository = require('../repository/repository');



checkUniqueMarketName = (marketObj) => {
    return new Promise(async (resolve, reject) => {
        try {
            let marketName = marketObj.name;
            let id = marketObj.id;
            let market = await repository.findObject(Marketplace,
                {
                    marketName: marketName,
                    isDelete: false
                })
            if (market && market._id != id) {
                return resolve(false)
            }
            resolve(true)

        } catch (error) {
            reject(error.message)
        }
    })
}

saveMarketplace = (username, marketplace) => {
    return new Promise(async (resolve, reject) => {
        try {
            let market = await new Marketplace(marketplace)
            market.user = await repository.findObject(User, { "username": username })
            Promise.all(
                market.cards.map(async c => {
                    await repository.findObjectByIdAndUpdate(Card,
                        c._id,
                        [{ $push: { marketplaces: market._id } },
                        { new: true }]
                    )
                })).then().then(async () => {

                    await repository.saveObject(market)
                    await repository.findObjectAndUpdate(User, { "username": username },
                        [{ $push: { marketplaces: savedMarket._id } },
                        { new: true }]
                    )

                    savedMarket = await savedMarket.populate('cards').execPopulate();
                    resolve(savedMarket);
                })
        }
        catch (err) {
            reject(err.message)
        }
    });
}


updateMarketplace = (username, marketplace) => {
    return new Promise(async (resolve, reject) => {
        try {
            repository.findObjectByIdAndUpdate(Marketplace, marketplace._id,
                [marketplace, { new: true },]).then(async (err, updatedMarket) => {
                    if (err)
                        console.log(err.message);
                    updatedMarket = await updatedMarket.populate('cards').execPopulate();
                    resolve(updatedMarket);
                })
        }
        catch (error) {
            console.log("error", error)
            reject(error)
        }
    });
}

getAllMarkets = (userName) => {
    return new Promise((resolve, reject) => {
        repository.findObject(User,{ username: userName }) 
            .populate({
                path: "marketplaces",
                populate: [{ path: 'cards', match: { isDelete: false } }],
                match: { isDelete: false }
            })
            .exec((err, user) => {
                if (err) {
                    reject(err);
                }
                resolve(user.marketplaces)
            })
    });
}

getMarketByName = async (req) => {
    const { marketName } = req.params;
    //await newActivIP(req)
    return new Promise((resolve, reject) => {

        Marketplace.findOne({
            marketName: marketName,
            isDelete: false
        })
            .populate({ path: "user" })
            .populate({ path: "cards" })
            .exec(async (err, market) => {
                if (err) {
                    reject(err);
                }
                // await newActivIP(card.statistic)
                resolve(market)
            })
    });
}

module.exports = {
    checkUniqueMarketName,
    saveMarketplace,
    updateMarketplace,
    getAllMarkets,
    getMarketByName
}