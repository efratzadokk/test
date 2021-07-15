const common = require('@leadercodes/modelsnpm');
const User =common.models.user
const repository = require('../repository/repository');

getUidByUserName = (userName) => {
  console.log("service-getUidByUserName")
  return new Promise(async (resolve, reject) => {
    try {
      const user = await repository.findOneObject(User, { username: userName })
      resolve(user);
    }
    catch (err) {
      reject(err.message)
    }
  })
};

submit = async (req, res) => {
  let currentUser = await User.findOne({ uid: req.params.uId });
  try {
    let sendEmailResult = await sendEmail(
      req.body.name,
      req.body.body,
      req.body.list,
      currentUser
    );
    let sendBoxRes = await submitToLeaderBox(req);
    let dataToSocket = { title: "lead", user: currentUser.uid };
    let socket = await newLeader(dataToSocket, req.headers["authorization"]);
    res.status(200).send({ massage: "data send succesfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error });
  }
};

module.exports={
  getUidByUserName
};