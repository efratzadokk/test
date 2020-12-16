const User = require('../models/User.js');
const request = require('request')


upload = async (req, res) => {
    if (req.files) {
        let files = await uploadedMultipleFiles(req.files, req.params.uId, req.headers["authorization"])//upload img
        console.log("data upload succeddded!!!", files);
        res.status(200).send({ files });
    }
    else
        res.status(200).send(null);
}

// (uploadedMultipleFiles = (fileToUpload, uId, headers) => {
//     return new Promise(async (resolve, reject) => {
//         console.log("in uploadedMultipleFiles")
//         const uri = `https://files.knowme.page/api/${uId}/uploadMultipleFiles`;
//         console.log("files:", Object.keys(fileToUpload));
//         console.log("files value:", fileToUpload["galleries"]);

//         let formdata = {}
//         Object.keys(fileToUpload).forEach(file => {
//             let currentFile =
//             {
//                 [file]: {
//                     value: fileToUpload[file].data,
//                     options: {
//                         filename: fileToUpload[file].name
//                     },
//                 }
//             }

//             formdata = Object.assign(currentFile, formdata);
//         });
//         console.log("formdata", formdata);
//         const options = {
//             method: "POST",
//             url: uri,
//             headers: {
//                 Authorization: headers,
//                 "Content-Type": "multipart/form-data",
//             },
//             formData: formdata
//         }
//         request(options, async (err, res, body) => {
//             if (err) {
//                 console.log(err);
//                 reject(err);
//             }
//             console.log("result from server", body);
//             try {
//                 console.log("sucsses");
//                 const files = JSON.parse(body).filesData;
//                 resolve(files);
//             } catch (error) {
//                 reject(error);
//             }
//         });
//     });
// });
(uploadedMultipleFiles = (fileToUpload, uId, headers) => {
    return new Promise(async (resolve, reject) => {
        console.log("in uploadedMultipleFiles")
        const uri = `https://files.knowme.page/api/${uId}/uploadMultipleFiles`;
        debugger;
        console.log("files:", Object.keys(fileToUpload));
        let formdata = {}
        Object.keys(fileToUpload).forEach(file => {
            let currentFile;
            if (Array.isArray(fileToUpload[file])) {
                let fileInFileToUpload = fileToUpload[file];
                fileInFileToUpload.forEach((item,index) => {
                    currentFile =
                    {
                        [file+"_"+index]: {
                            value: item.data,
                            options: {
                                filename: item.name
                            },
                        }
                    }
                    console.log("@@@@@@@@@@@@@@@@@@@@22",currentFile)
                    formdata = Object.assign(currentFile, formdata);
                })
            }
            else {
                currentFile = {
                    [file]: {
                        value: fileToUpload[file].data,
                        options: {
                            filename: fileToUpload[file].name
                        },
                    }
                }
                formdata = Object.assign(currentFile, formdata);
            }
        });
        console.log("formdata", formdata);
        const options = {
            method: "POST",
            url: uri,
            headers: {
                Authorization: headers,
                "Content-Type": "multipart/form-data",
            },
            formData: formdata
        }
        request(options, async (err, res, body) => {
            if (err) {
                console.log(err);
                reject(err);
            }
            console.log("result from server", body);
            try {
                console.log("sucsses");
                const files = JSON.parse(body).filesData;
                resolve(files);
            } catch (error) {
                reject(error);
            }
        });
    });
});

removeMultipleFiles = async (req, res) => {
    const { urls } = req.body;
    const options = {
        url: `https://files.knowme.page/api/${req.params.uId}/removeMultipleFiles`,
        method: "POST",
        json: { urls },
        headers: {
            Authorization: req.headers["authorization"],
        }
    };
    console.log("removeMultipleFiles", urls, options.url)
    request(options, async (error, result, body) => {
        if (error || result.statusCode !== 200) {
            const message = error ? error : body
            console.log("error:" + message);
            res.status(500).send(message);
        }
        else {
            //delete task
            res.status(200).send(body)
        }
    });

}

updateFiles = async (req, res) => {//update post
    console.log("update!!!!!!!!!")
    const { files, urls, post } = req.body;
    let currentUser = await User.findOne({ uid: req.params.uId });
    console.log(req.body);
    if (files) {
        const options = {
            url: `https://files.knowme.page/api/${req.params.uId}/updateMultiFilesDB`,
            method: "POST",
            json: {files,urls },
            headers: {
                Authorization: req.headers["authorization"],
            }
        };
        request(options, async (error, result, body) => {
            if (error || result.statusCode !== 200) {
                const message = error ? error : body
                console.log("error:" + message);
                res.status(500).send(message);
            }
            else {
                console.log(body);
                Post.findOneAndUpdate(
                    {
                        _id: req.params.pId
                    },
                    post,
                    { new: true }
                ).exec((err, result) => {
                    if (err) res.status(500).json({ err });
                    else {
                        res.status(200).json({ message: "Post updated successfully", result })
                    };
                });
            };
 
        });
    }
    else {
        Post.findOneAndUpdate(
            {
                _id: req.params.pId
            },
            post,
            { new: true }
        ).exec((err, result) => {
            if (err) res.status(500).json({ err });
            else {
                res.status(200).json({ message: "Post updated successfully", result })
            };
        });
    }
}


module.exports = {
    upload,
    removeMultipleFiles
}