const Marketplace = require('../models/marketplace.js');
const User = require('../models/user');
const Card =require('../models/card');
const { findOne } = require('../models/marketplace.js');



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

saveMarketplace = async (username, marketplace) => {
   
    return new Promise(async (resolve, reject) => {

        try {

            //create marketplace
            let market = await new Marketplace(marketplace)
            //conect market to user
            market.user = await User.findOne({ "username": username })

            //run over all cards
            Promise.all(
            market.cards.map(async c => {

                await Card.findOneAndUpdate(
                    { _id: c._id },
                    { $push: { marketplaces: market._id } },
                    { new: true }
                )
                // connect market to card
            })).then().then(data=>{

                //save market
                market.save(async (err, savedMarket) => {
        
                    if (err)  return res.send(err)
                    //connect user to market
                    await User.findOneAndUpdate(
                        { "username": username },
                        { $push: { marketplaces: savedMarket._id } },
                        { new: true }
                    )
                    savedMarket=await savedMarket.populate('cards').execPopulate();
                    resolve(savedMarket);
                })
            });

            
        }
        catch (error) {
            console.log("error", error)
            reject(error)
        }
    });
}


updateMarketplace = async (username, marketplace) => {
   
    return new Promise(async (resolve, reject) => {
        try {

            //run over added cards
            // Promise.all(
            // market.cards.map(async (c)=> {

            //     await Card.findOneAndUpdate(
            //         { _id: c._id },
            //         { $push: { marketplaces: market._id } },
            //         { new: true }
            //     )
            //     // connect market to card
            // }));
            
            // //run over deleted cards
            // Promise.all(
            // marketplace.deletedCards.map(async (c) => {
            //     //drop connect card to market
            //     let card=await Card.findOne({_id:c._id})
            //     let index1 =card.marketplaces.indexOf(market._id)
            //     card.marketplaces.splice(index1, 1);
            //     //save card
            //     card.save();
            //     //drop connect market to card
            //     let index2 =market.cards.indexOf(c._id)
            //     market.cards.splice(index2, 1);
            // }));

            Marketplace.findByIdAndUpdate(
                { _id: marketplace._id},
                marketplace,
                { new: true },
                async(err, updatedMarket) => {

                    if (err) console.log(err);

                    updatedMarket=await updatedMarket.populate('cards').execPopulate();
                    resolve(updatedMarket);
                }
            );
        }
        catch (error) {
            console.log("error", error)
            reject(error)
        }
    });
}


module.exports = {
    checkUniqueMarketName,
    saveMarketplace,
    updateMarketplace
}