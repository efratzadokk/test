const User = require('../models/User.js');
const path = require('path');
const request = require('request');

const Card = require('../models/Card.js');
const SocialMedia = require('../models/SocialMedia.js');



getDigitalCard = async (req, res) => {
    let currentUser = await User.findOne({ "uid": req.params.uId });
    console.log('currentUser >>> ', currentUser)
    User
        .findOne({ "_id": currentUser._id })
        .populate({
            path: 'cards',
            populate: {
                path: 'socialMedias'
            }
        })
        .exec((err, user) => {
            if (err) { res.status(500).send(err) }
            res.status(200).send(user.cards);

        })
}



getCardById = (req, res) => {
    console.log("getCardById");
    console.log(req.params.cardId)
    Card.findOne({ _id: req.params.cardId })
        .populate({
            path: "socialMedias",
        })
        .exec((err, cards) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).send(cards);
        });
};


createDigitalCard = async (req, res) => {
    let card = req.body;
    try {
        let currentUser = await User.findOne({ "uid": req.params.uId });
        console.log(req.params.uId);
        let socialMedias = card.socialMedias;
        card.socialMedias = [];
        let nCard = new Card();
        console.log(nCard._id)
        let currentCard = new Card(card);

        currentCard.user = currentUser._id;
        currentCard._id = nCard._id;
        currentUser.cards.push(currentCard._id);
        currentCard.socialMedias = [];
        socialMedias.forEach(async (socialMedia, index) => {
            let nCurrentSocialMedia = new SocialMedia();
            let currentSocialMedia = new SocialMedia(socialMedia);
            currentSocialMedia._id = nCurrentSocialMedia._id;
            currentSocialMedia.card = currentCard._id
            await currentSocialMedia.save().then((socialMedia) => {
                currentCard.socialMedias.push(socialMedia);
            });
            if (index == socialMedias.length - 1) {
                await currentCard.save();

            }

        });

        let result = await currentUser.save();
        res.send(currentCard);
    } catch (error) {
        res.send(error)

    }
}

updateDigitalCard = (req, res) => {
    let card = req.body;
    let socialMedias = card.socialMedias ? card.socialMedias : [];
    console.log("socialMedias:" + socialMedias[0]);
    delete card.socialMedias;
    delete card._id;
    Card.findByIdAndUpdate(
        { _id: req.params.cardId },
        card,
        { new: true },
        (err, currentCard) => {
            if (err) {
                console.log(err);
                res.send(err);
            }
            socialMedias.forEach((sMedia, index) => {
                let socialMedia = SocialMedia.findByIdAndUpdate(
                    sMedia._id,
                    sMedia,
                    { new: true },
                    (err, media) => {
                        if (err) {
                            console.log(err);
                            return res.status(500).send(err);
                        }
                        if (index == socialMedias.length - 1) {
                            // console.log(media);
                            console.log("currentCard:" + card);
                            // res.status(200).send(currentCard);
                            // need change
                            Card.findOne({ _id: req.params.cardId })
                                .populate({
                                    path: "socialMedias",
                                })
                                .exec((err, cards) => {
                                    if (err) {
                                        res.status(500).send(err);
                                    }
                                    res.status(200).send(cards);
                                });
                        }
                    }
                );
            });
        }
    );
};


deleteCard = async (req, res) => {
    let card = req.body;
    let socialMedias = card.socialMedias;
    console.log("!!!!!!!!!!!" + req.body);
    await Card.findByIdAndDelete(
        { _id: req.params.cardId },
        card,
        // { new: true },
        (err, currentCard) => {
            if (err) {
                console.log(err);
                res.send(err);
            }
            socialMedias.forEach(async (sMedia, index) => {
                let socialMedia = await SocialMedia.findByIdAndDelete(
                    sMedia._id,
                    sMedia,
                    // { new: true },
                    (err, media) => {
                        if (err) {
                            console.log(err);
                            return res.status(500).send(err);
                        }
                        if (index == socialMedias.length - 1) {
                            //   console.log(media);
                            console.log("currentCard:" + card);
                            res.status(200).send(currentCard);
                        }
                    }
                );
            });
        }
    );
};


getUidByUserName = async (req, res) => {
    console.log("inside!!")
    const userName = req.params.userName
    console.log(userName)
    const user = await User.findOne({ username: userName })
    if (user)
        res.json({ "uid": user.uid })
};
 
sendMessageByCard = async (req, res) => {
    const { body, mailTo } = req.body;
    console.log("arrive to sendEmail");
    console.log(body)
    var email = {}
    email = {
        to: mailTo,
        from: "noreply@leader.codes",
        subject: "From Digital cards",
        html: body
    }

    // Form.findOneAndUpdate({ user: currentUser._id, name: req.params.name.toLowerCase() }, { $push: { submitions: req.body.submition } }, { upsert: true }).exec((err, result) => {
    //     console.log("234", result);
    console.log("body:=====" + req.headers["authorization"]);


    const options = {
        url: 'https://api.leader.codes/mail/sendEmail',
        method: 'POST',
        headers: { Authorization: req.headers["authorization"] },
        json: email,
        // "data": JSON.stringify({"json": JSON.stringify(email) }),

    };

    request(options, (error, res1, body) => {
        console.log("arrive$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");

        if (error) {
            console.log("error$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
            return
            console.error(error)
        }
        else
            console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&&&&");
        res.status(200).json({ message: 'sent' })
    })

}






module.exports = {
    createDigitalCard,
    updateDigitalCard,
    getDigitalCard,
    getCardById,
    deleteCard,
    getUidByUserName,
    sendMessageByCard
}