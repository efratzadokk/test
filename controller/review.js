const Reveiw = require('../models/reveiw.js');


saveReveiws = (reveiw) => {
    return new Promise(async (resolve, reject) => {
        let reveiws = []
        console.log("inside Reveiw !")
        try {
            Promise.all(
                reveiw.map(async (reveiwIndex) => {
                    
                    //for copy review
                    let temp = new Reveiw();
                    let newReveiw = new Reveiw(reveiwIndex);
                    newReveiw._id=temp._id

                    await newReveiw.save()
                    reveiws.push(newReveiw);

                })).then(() => {
                    resolve(reveiws)
                })

        } catch (error) {
            console.log("reveiw errore: -", error)
            reject(error);
        }
    });
}

updateReveiw = (reveiws) => {
    return new Promise(async (resolve, reject) => {
        console.log("inside update reveiw !")
        let newReveiws=[];
        let newReveiw;
        try {
            await Promise.all(
                reveiws.map(async (reveiw) => {
                    if (reveiw._id) {
                        newReveiw=await Reveiw.findByIdAndUpdate(
                            reveiw._id,
                            reveiw,
                            { new: true },
                            (err, newReveiw)=>{
                                if(err) reject(err);
                                newReveiws.push(newReveiw._doc);
                            }
                        )
                    }
                    else{
                        newReveiw=new Reveiw(reveiw)
                        newReveiw.save((err,newR)=>{
                            
                            if(err) reject(err);
                            newReveiws.push(newR._doc);
                        })
                    }
                })).then(() => {
                    console.log("newReveiw",newReveiw)
                }).then(() => {
                    resolve(newReveiws)
                })
        } catch (error) {
            console.log("reveiw errore: -", error)
            reject(error);
        }
    });
}


deleteReveiw = async (req, res) => {
    let reveiwId = req.params.reveiwId;
    try {
        await Reveiw.findByIdAndDelete(
            reveiwId,
            (err) => {
                if (err) {
                    console.log(err);
                    console.log("Successful deletion");
                }
                res.status(200).send("delete success");
                // res.send(reveiw)
            });
    } catch (error) {
        console.log("reveiw errore deletion: -", error)
    }
}

module.exports = {
    saveReveiws,
    updateReveiw,
    deleteReveiw,
}