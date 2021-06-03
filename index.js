const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const cors = require('cors')
const bodyParser = require('body-parser')
const fileUpload = require("express-fileupload");


const io = require('socket.io')(5001, {
    cors: {
        origin: 'https://localhost:3000',
        method: ['POST', 'GET']
    }
})
const app = express();

dotenv.config();

const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
const routeProtectedApi = require('./routes/api/protected');
const routePublicApi = require('./routes/api/public');
const routeToViews = require('./routes/view/views');
const auth = require('./controller/auth');
const Card = require('./models/Card')
const User = require('./models/User')


app.use(cors());
app.use(cookieParser())
app.use(fileUpload({ createParentPath: true }));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));


mongoose.connect(process
    .env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

app.use("/api/admin", auth.checkPermission, routeProtectedApi);
app.use("/api/public", routePublicApi);
app.use("/", routeToViews);

app.all("/*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Accept,X-Access-Token,X-Key,Authorization,X-Requested-With,Origin,Access-Control-Allow-Origin,Access-Control-Allow-Credentials');
    if (req.method === 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});


console.log("is new!!!");
let countByCardName = {};
io.on('connection', socket => {
    socket.on("createRooms", (cardName) => {
        socket.join(cardName);
        socket.on("add-cardName", (cardName) => {
            if (countByCardName[cardName] == undefined || countByCardName[cardName] === -1) {
                countByCardName[cardName] = 1;
                console.log("0", cardName, countByCardName[cardName]);
            } else {
                countByCardName[cardName]++;
                console.log("1", cardName, countByCardName[cardName]);
            }

            socket.to(cardName).emit("recive-changes", countByCardName[cardName])
            console.log("2", cardName, countByCardName[cardName]);
        })
        socket.to(cardName).emit("recive-changes", countByCardName[cardName])
        console.log("2", cardName, countByCardName[cardName]);

        socket.on('disconnect', (view) => {
            if (view)
                --countByCardName[cardName]
            socket.to(cardName).emit("recive-changes", countByCardName[cardName])
        });

    })
    let userId
    socket.on("userActive", async (value, view) => {
        if (view) {
            userId = await Card.find({ cardName: value, isDelete: false })
            userId = userId[0].user.toString();
        }
        else {
            userId = value
        }
        socket.join(userId.toString());
        console.log(io.sockets.adapter.rooms);
        socket.on('disconnect', async () => {
            if (!view) {
                // let user = await User.findById(userId)
                // user.active--;
                // user.save()
                // socket.to(userId.toString()).emit("active-changes", user.active)
                socket.to(userId.toString()).emit("active-changes", 0)

            }
        });
        if (!view) {
            // let user = await User.findById(userId)
            // user.active++;
            // user.save()
            // socket.to(userId).emit("active-changes", user.active);
            socket.to(userId).emit("active-changes", 1);
        }
    })

});

app.listen(process
    .env.PORT, (err) => {
        console.log("server is up!!!!!");
    });