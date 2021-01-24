const Video = require('../models/Video.js');


saveVideo = (video) => {
    return new Promise(async (resolve, reject) => {
        console.log("inside Video")
        try {
            let tmpVideo = new Video();
            let newVideo = new Video(video);
            newVideo._id = tmpVideo._id;
            newVideo.save().then((video_db) => {
                resolve(video_db);
                console.log("avial video");
            });

        } catch (error) {
            console.log("video errore: -", error)
            reject(error);
        }
    });
}



updateVideo = (video) => {
    return new Promise(async (resolve, reject) => {
        try {
            Video.findByIdAndUpdate(
                video._id,
                video,
                { new: true },
                (err, n_video) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    }
                    resolve(n_video);
                }
            )
        } catch (error) {
            console.log("video errore: -", error)
            reject(error);
        }
    });
}


module.exports = {
    saveVideo,
    updateVideo
}