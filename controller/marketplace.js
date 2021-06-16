const Marketplace = require('../models/marketplace.js');
const User = require('../models/User');
const Card = require('../models/Card');
const service = require('../service/marketplace.service')

checkUniqueMarketName = async (req, res) => {
    try {
        let market = await service.checkUniqueMarketName({ name: req.body.marketName, id: req.body.id })
        return res.send(market)
    }
    catch (err) {
        res.send(err.message);
    }
}

// updateMarketplace = async (username, marketplace) => {

//     return new Promise(async (resolve, reject) => {
//         try {

//             //run over added cards
//             // Promise.all(
//             // market.cards.map(async (c)=> {

//             //     await Card.findOneAndUpdate(
//             //         { _id: c._id },
//             //         { $push: { marketplaces: market._id } },
//             //         { new: true }
//             //     )
//             //     // connect market to card
//             // }));

//             // //run over deleted cards
//             // Promise.all(
//             // marketplace.deletedCards.map(async (c) => {
//             //     //drop connect card to market
//             //     let card=await Card.findOne({_id:c._id})
//             //     let index1 =card.marketplaces.indexOf(market._id)
//             //     card.marketplaces.splice(index1, 1);
//             //     //save card
//             //     card.save();
//             //     //drop connect market to card
//             //     let index2 =market.cards.indexOf(c._id)
//             //     market.cards.splice(index2, 1);
//             // }));

//             Marketplace.findByIdAndUpdate(
//                 { _id: marketplace._id },
//                 marketplace,
//                 { new: true },
//                 async (err, updatedMarket) => {
//                     if (err) console.log(err);
//                     updatedMarket = await updatedMarket.populate('cards').execPopulate();
//                     resolve(updatedMarket);
//                 }
//             );
//         }
//         catch (error) {
//             console.log("error", error)
//             reject(error)
//         }
//     });
// }

// getAllMarkets = (userName) => {

//     return new Promise((resolve, reject) => {
//         console.log("username", userName)
//         User.findOne({ username: userName })
//             .populate({
//                 path: "marketplaces",
//                 populate: [{ path: 'cards', match: { isDelete: false } }],
//                 match: { isDelete: false }
//             })
//             .exec((err, user) => {
//                 if (err) {
//                     reject(err);
//                 }
//                 resolve(user.marketplaces)
//             })
//     });
// }

getMarketByName = async (req, res) => {
    const { marketName } = req.params;
    try {
        service.getMarketByName(marketName)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.send(err)
            })
    }
    catch (error) {
        res.send(error.message)
    }

}

module.exports = {
    checkUniqueMarketName,
    updateMarketplace,
    getAllMarkets,
    getMarketByName
}