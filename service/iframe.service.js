const Iframe = require('../models/Iframe.js');
const repository = require('../repository/repository');

saveIframe = (iframe) => {
    return new Promise(async (resolve, reject) => {
        try {
            let newIframe = new Iframe(iframe);
            await repository.saveObject(newIframe)
                .then((iframe_db) => {
                    resolve(iframe_db);
                });

        } catch (error) {
            reject(error.message);
        }
    });
}

// saveIframe = (iframe) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let tmpIframe = new Iframe();
//             let newIframe = new Iframe(iframe);
//             newIframe._id = tmpIframe._id;
//             newIframe.save().then((iframe_db) => {
//                 resolve(iframe_db);

//             });

//         } catch (error) {
//             reject(error.message);
//         }
//     });
// }

// updateIframe = (iframe) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             Iframe.findByIdAndUpdate(
//                 iframe._id,
//                 iframe,
//                 { new: true },
//                 (err, n_iframe) => {
//                     if (err) {
//                         console.log(err);
//                         reject(err);
//                     }
//                     resolve(n_iframe);
//                 }
//             )
//         } catch (error) {
//             reject(error.message);
//         }
//     });
// }
updateIframe = (iframe) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (iframe._id !== null) {
                let iframeUpdate = repository.findObjectByIdAndUpdate(Iframe,
                    iframe._id,
                    [iframe, { new: true }])

                if (iframeUpdate)
                    resolve(iframeUpdate);
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
    })
}

module.exports = {
    saveIframe,
    updateIframe
}