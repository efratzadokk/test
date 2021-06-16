const request = require('request');



let sendExternalApi=(options)=>{
    return new Promise((resolve, reject) => {
        request(options, (error, res) => {
            if (error) {
                reject(error);
            }
            resolve(res);
        });
    });

}


module.exports={sendExternalApi}