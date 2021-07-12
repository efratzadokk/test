// const User = require("../models/user.js");
// const Funnels =require("../models/Funnels.js")
const common = require('@leadercodes/modelsnpm');
const User = common.models.user;
const Funnels =common.models.funnel

const fs = require("fs");
const request = require("request");
const path = require("path");

duplicateFunnelById = async (req, res) => {
  //   console.log("duplicateFunnel");
  //   let funnel = await Funnels.find({ _id: req.params.funnelId });
  //   console.log(funnel)
  //   let currentUser = await User.find({ _id: funnel.user });
  //   console.log(currentUser)
  //   let funnelUrl = req.body.url;
  //   console.log(funnelUrl)
  //   let funnelName = funnel.name;
  //   try {
  //     result = await saveDataFunnels(funnel, currentUser, funnelName, funnelUrl);
  //     res.status(200).send(result);
  //   } catch (error) {
  //     res.status(500).send(error);
  //   }
  // };
  console.log("duplicateFunnel");
  let funnel = await Funnels.findOne({ _id: req.params.funnelId });
  console.log(funnel)
  let currentUser = await User.findOne({ _id: funnel.user });
  console.log("currentUser:",currentUser)
  let funnelToSave = funnel.json;
  console.log("funnelToSave:",funnelToSave)

  // let funnelUrl = req.body.url;
  let funnelUrl = funnel.url;
  console.log(funnelUrl)
  let funnelName = funnel.name
  try {
    result = await saveDataFunnels(funnelToSave, currentUser, funnelName, funnelUrl);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

deleteFunnelById = async (req, res) => {
  const userName = req.params.userName
  console.log(userName)
  const funnel = await Funnels.findOneAndDelete({ _id: req.params.funnelId })
  console.log("deleted")
  if (funnel)
    res.send({ massage: "deleted" })
}


duplicateLandingPage = async (req, res) => {
  console.log("req:" + req.params.landingPageId);
  let currentUser = await User.findOne({ uid: req.params.uId });
  let LandingPageDuplicate = await LandingPage.findOne({
    user: currentUser._id,
    _id: req.params.landingPageId,
  });
  // let numForms = await Form.find({ user: currentUser._id })

  const newLandingPage = new LandingPage({
    name: "landingPage_" + Date.now(),
    json: LandingPageDuplicate.json,
  });
  newLandingPage.user = currentUser._id;

  await newLandingPage.save();
  currentUser.LandingPage.push(newLandingPage);
  await currentUser.save();
  res.status(200).send({ massage: "form added succesfully", newLandingPage });
};
//////////good
getUidByUserName = async (req, res) => {
  console.log("inside!!")
  const userName = req.params.userName
  console.log(userName)
  const user = await User.findOne({ username: userName })
//   if (user)
    console.log("uid " + user)
  res.json({ "uid": user._id })
}
//////////good
getAllFunnelsByUserId = async (req, res) => {
  console.log("inside  getAllFunnelsByUserId!!")
  const userId = req.params.userId
  console.log(userId)

  const allFunnels = await Funnels.find({ user: userId })
  if (allFunnels)
    // console.log("funnels " + allFunnels)
    res.json({ "funnels": allFunnels })
}
//////////good
createFunnel = async (req, res) => {
  console.log("createFunnel");
  let currentUser = await User.findOne({ _id: req.params.uId });
  console.log(currentUser._id)
  console.log(req.body)
  let funnelToSave = req.body.json;
  let funnelUrl = req.body.url;
  let funnelName = req.params.funnelName;

  // if (req.files) {
  //   console.log("with img");
  //   try {
  //     let url = await uploadedFile(req.files.image, req.params.uId, req.headers["authorization"]);
  //     console.log("uploaded img", url);
  //     funnelToSave.img = url;
  //     funnelToSave.name = funnelToSave.name.toLowerCase();
  //     // console.log(url);
  //     result = await saveDataFunnels(customUser, currentUser);

  //     res.status(200).send(result);
  //   } catch (error) {
  //     res.status(500).send(error);
  //   }
  // } else {
  //   console.log("without img");
  try {
    result = await saveDataFunnels(funnelToSave, currentUser, funnelName, funnelUrl);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
  // }
};
//////////good
saveDataFunnels = (funnelToSave, currentUser, funnelName, funnelUrl) => {
  return new Promise(async (resolve, reject) => {
    const funnel = new Funnels({
      name: funnelName,
      json: JSON.stringify(funnelToSave),
      url: funnelUrl,
      date: Date.now(),
      lastUpdate: Date.now(),
      viewsNumber: 0,
      count: 0,
      user: currentUser._id,
    });
    console.log("funnel:", funnel)
    // funnel.user = currentUser._id;
    let result = await funnel.save();
    // currentUser.landingPages.push(landingPage);
    // need to save the funnel in the user schema,object
    try {
      // await currentUser.save();
      //add the funnel to the current user

      console.log("saved successfully");
      // console.log(result)
      resolve({ funnel: result });
    } catch (error) {
      res.status(500).send(error)
    }

  });
};
//////////good
getFunnelByName = async (req, res) => {
  console.log("inside  getFunnelByName!!")
  const userId = req.params.uId
  const funnelName = req.params.funnelName

  console.log(userId, funnelName)
  const funnel = await Funnels.findOne({ user: userId, name: funnelName })
  if (funnel)
    // console.log("funnels " + allFunnels)
    res.json({ "funnel": funnel })
}

//////////good
updateFunnelDetails = async (req, res) => {

  // console.log(req.files);
  console.log("inside updateFunnelDetails!!!!!");
  let currentUser = await User.findOne({ _id: req.params.uId });
  console.log(currentUser);
  let funnelToUpdate = req.body;
  console.log(funnelToUpdate);

  // if (req.files) {
  //   try {
  //     let url = await uploadedFile(req.files.image, req.params.uId, req.headers["authorization"]);
  //     customUser.img = url;
  //     console.log(url);
  //     result = await updateData(customUser, currentUser._id, req.params.name);
  //     res.status(200).send(result);
  //   } catch (error) {
  //     res.status(500).send(error);
  //   }
  // } else {
  try {
    result = await updateData(funnelToUpdate, currentUser._id, req.params.funnelId);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
  // }
};
//////////good
updateData = (funnelToUpdate, userId, funnelId) => {
  // console.log(userId,funnelId)
  return new Promise(async (resolve, reject) => {
    Funnels.findOneAndUpdate(
      { _id: funnelId, user: userId },//.toLowerCase() 
      funnelToUpdate, { new: true }
      // funnelToUpdate,{new:true,upsert: true}
    ).then((result, err) => {
      if (err) console.log(err);
      console.log("updated successfully");
      resolve(result);
    });
  });
};


removeLandingPage = async (req, res) => {
  console.log(req.params.LandingPageId);
  LandingPage.findOneAndRemove({ _id: req.params.LandingPageId }).exec(
    async (err, result) => {
      if (err) console.log(err);
      else {
        console.log("removee");
        res.status(200).json({ result });
      }
    }
  );
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
getLandingPages = async (req, res) => {
  console.log("getLandingPages");
  let currentUser = await User.findOne({ uid: req.params.uId });
  console.log(currentUser)
  LandingPage.find({ user: currentUser._id }).then((landingPages, err) => {
    // console.log(landingPages)
    if (err) res.status(500).send(err);
    res.status(200).send(landingPages);
  });
};
getLandingPageDetails = async (req, res) => {
  console.log(req.params);
  let currentUser = await User.findOne({ uid: req.params.uId });
  // console.log(currentUser)
  console.log(currentUser._id);
  LandingPage.findOne({
    user: currentUser._id,
    name: req.params.name.toLowerCase(),
  }).then((user, err) => {
    console.log(user);
    console.log(user);

    if (!err) res.status(200).send(user);
    console.log(err);
  });
};
updateLandingPageDetails = async (req, res) => {
  console.log(req.files);
  let currentUser = await User.findOne({ uid: req.params.uId });
  let customUser = req.body;
  if (req.files) {
    try {
      let url = await uploadedFile(req.files.image, req.params.uId, req.headers["authorization"]);
      customUser.img = url;
      console.log(url);
      result = await updateData(customUser, currentUser._id, req.params.name);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  } else {
    try {
      result = await updateData(customUser, currentUser._id, req.params.name);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  }
};
createLandingPage = async (req, res) => {
  console.log("createLandingPage");
  let currentUser = await User.findOne({ uid: req.params.uId });
  let customUser = req.body;
  if (req.files) {
    console.log("with img");
    try {
      let url = await uploadedFile(req.files.image, req.params.uId, req.headers["authorization"]);
      console.log("uploaded img", url);
      customUser.img = url;
      customUser.name = customUser.name.toLowerCase();
      console.log(url);
      result = await saveData(customUser, currentUser);

      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  } else {
    console.log("without img");
    try {
      result = await saveData(customUser, currentUser);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  }
};
saveData = (customUser, currentUser) => {
  return new Promise(async (resolve, reject) => {
    const landingPage = new LandingPage(customUser);
    landingPage.user = currentUser._id;
    let result = await landingPage.save();
    currentUser.landingPages.push(landingPage);
    try {
      await currentUser.save();
      console.log("saved successfully");
      resolve(result);
    } catch (error) {
      res.status(500).send(error)
    }

  });
};



newLeader = (dataToSocket, headers) => {
  const options = {
    url: "https://api.leader.codes/socket",
    headers: { Authorization: headers },
    method: "POST",
    json: dataToSocket,
  };
  return new Promise(async (resolve, reject) => {
    request(options, (error, res, body) => {
      if (error) {
        console.error(error);
        reject(error);
      }
      if (res && !res.statusCode == 200) reject(body);
      console.log(`statusCode: ${res.statusCode}`);
      console.log(body);
      resolve(body);
    });
  });
};

sendEmail = async (name, body, list, currentUser) => {
  var email = {};
  email = {
    to: list,
    from: "noreply@leader.codes",
    subject: "Landing Page " + name,
    html: body,
  };
  const options = {
    url: "https://api.leader.codes/mail/sendEmail",
    method: "POST",
    headers: { Authorization: "view" },
    json: email,
    // "data": JSON.stringify({"json": JSON.stringify(email) }),
  };
  return new Promise((resolve, reject) => {
    request(options, (error, res, body) => {
      if (error) {
        console.error(error);
        reject(error);
      }
      console.log(`statusCode: ${res.statusCode}`);
      console.log(body);
      resolve(body);
    });
  });
};
(getUserEmail = async (req, res) => {
  const userUid = req.params.uId;
  console.log("userId", userUid);
  await User.findOne({ uid: userUid })
    .then((user) => {
      // console.log("user", user);
      console.log(user.email);
      res.status(200).send(user.email);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ error });
    });
}), uploadedFile = (fileToUpload, uId, headers) => {
  console.log("headers", headers);
  return new Promise(async (resolve, reject) => {
    console.log(fileToUpload);
    console.log("uploadedFile");
    const uri = `https://files.leader.codes/api/${uId}/upload`;
    console.log(uri);
    const options = {
      method: "POST",
      url: uri,
      headers: {
        Authorization: headers,
        "Content-Type": "multipart/form-data",
      },
      formData: {
        file: {
          value: fileToUpload.data,
          options: {
            filename: fileToUpload.name,
          },
        },
      },
    };

    request(options, async (err, res, body) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      console.log("result from server", body);
      try {
        let url = JSON.parse(body).data.url;
        resolve(url);
      } catch (error) {
        reject(error);
      }
    });
  });
};
// });
submitToLeaderBox = async (req) => {
  const { body, list, subject, name, submition } = req.body;
  let contactDetails = JSON.parse(submition);
  let conversation = { source: "landing_page", subject: "landingPage " + name };
  let wave = { body: req.body.body };
  console.log(contactDetails);
  const options = {
    url: ` https://box.leader.codes/api/${req.params.uId}/conversation/getConversation`,
    headers: { Authorization: req.headers["authorization"] },
    method: "POST",
    json: {
      conversation,
      wave,
      contact: { email: contactDetails.email, name: contactDetails.fullName, phone: contactDetails.phone },
    },
  };
  return new Promise((resolve, reject) => {
    request(options, (error, res, body) => {
      if (error) {
        console.log("error:" + error);
        reject(error);
      }
      console.log(`statusCode: ${res.statusCode}`);
      resolve("sent");
    });
  });
};

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
updateViewers = async (req, res) => {
  console.log("updaeViewrs");
  let start = new Date(2020, 09, 01);
  let end = new Date(2020, 09, 31);
  let randDate = randomDate(start, end);

  let number = getRandomInt(100);

  await LandingPage.updateMany({}, { $push: { viewers: { date: randDate, amount: number } } });
  console.log("updated successfully!!");
  res.send({ massage: "updated successfully!!" })
}
function gggg(params) {
}

module.exports = {
  gggg,
  submit,
  getFunnelByName,
  getLandingPageDetails,
  updateLandingPageDetails,
  updateFunnelDetails,
  createLandingPage,
  getAllFunnelsByUserId,
  createFunnel,
  getLandingPages,
  getUserEmail,
  removeLandingPage,
  duplicateLandingPage,
  getUidByUserName,
  updateViewers,
  deleteFunnelById,
  duplicateFunnelById
};
