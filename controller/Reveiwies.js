const Reveiw = require('../models/Reveiw.js');


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

// updateReveiw = (reveiws) => {
//     return new Promise(async (resolve, reject) => {
//         console.log("inside update reveiw !")
//         let newReveiws=[];
//         let newReveiw;
//         try {
//             await Promise.all(
//                 reveiws.map(async (reveiw) => {
//                     if (reveiw._id !== null) {
//                         newReveiw=await Reveiw.findByIdAndUpdate(
//                             reveiw._id,
//                             reveiw,
//                             { new: true }
//                             ,
//                             (err, newReveiw)=>{
//                                 newReveiws.push(newReveiw);
//                             }
//                         )
//                     }
//                 })).then(() => {
//                     // console.log("newReveiw",newReveiw)
//                     // newReveiws.push(newReveiw)
//                 }).then(() => {
//                     resolve(newReveiws)
//                 })
//         } catch (error) {
//             console.log("reveiw errore: -", error)
//             reject(error);
//         }
//     });
// }

updateReveiw = (reveiw) => {
    return new Promise(async (resolve, reject) => {
        console.log("inside update reveiw !")
        try {
            Promise.all(
                reveiw.map(async (reveiwIndex) => {
                    if (reveiwIndex._id !== null) {
                        Reveiw.findByIdAndUpdate(
                            reveiwIndex._id,
                            reveiwIndex,
                            { new: true })
                    }
                })).then(() => {

                }).then(() => {
                    resolve("update")
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