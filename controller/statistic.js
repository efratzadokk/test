const Statistic = require('../models/Statistics');


updateStatistic = (statistic) => {
    return new Promise(async (resolve, reject) => {
        try {
            if(statistic._id !== null){
                 Statistic.findByIdAndUpdate(
                statistic._id,
                statistic,
                { new: true },
                (err, n_statistic) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    }
                    resolve(n_statistic);
                }
            ) 
            }
          else{
            reject('error');
          }
        } catch (error) {
            console.log("statistic errore: -", error)
            reject(error);
        }
    });
}
setCntSocialMediaAndCall = async(req, res) => {
    let statistic = await Statistic.findOne({ idCard:req.params.cardId })
    statistic.socialMediaCnt=req.body.cntSocial
    statistic.callMeCnt=req.body.cntCallMe
    if( statistic.activeViewer>0){
         statistic.activeViewer -= 1;
    }
   
    await statistic.save()
    res.send('the count is update')
}
module.exports = {
    updateStatistic,
    setCntSocialMediaAndCall
}