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

(uploadedMultipleFiles = (fileToUpload, uId, headers) => {
    return new Promise(async (resolve, reject) => {
        console.log("in uploadedMultipleFiles")
        const uri = `https://files.knowme.page/api/${uId}/uploadMultipleFiles`;
        console.log("files:", Object.keys(fileToUpload));
        let formdata = {}
        Object.keys(fileToUpload).forEach(file => {
            let currentFile =
            {
                [file]: {
                    value: fileToUpload[file].data,
                    options: {
                        filename: fileToUpload[file].name
                    },
                }
            }

            formdata = Object.assign(currentFile, formdata);
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


module.exports = {
    upload
}