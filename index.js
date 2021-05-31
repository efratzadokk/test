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
// let activeViewer = 0
var numClients = {};
io.on('connection', socket => {
    socket.on("byCardName", (cardName) => {
        socket.on("add-user", () => {
            socket.join(cardName);
            if (numClients[cardName] == undefined) {
                numClients[cardName] = 1;
                console.log("!!!!!!!!!", cardName, numClients[cardName]);

            } else {
                numClients[cardName]++;
                console.log("!!!!!!!!!", cardName, numClients[cardName]);
            }
            socket.broadcast.emit("recive-changes", numClients[cardName])

        });
        socket.on('disconnect', () => {
            socket.broadcast.emit("recive-changes", --numClients[cardName]);
        });
    })
    socket.on("cardName-changes", (cardName) => {
        socket.broadcast.emit("recive-changes", numClients[cardName])
    })


});

app.listen(process
    .env.PORT, (err) => {
        console.log("server is up!!!!!");
    });