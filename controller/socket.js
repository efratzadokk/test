const io = require('socket.io')(5001, {
    cors: {
        origin: 'https://localhost:3000',
        method: ['POST', 'GET']
    }
})
const Card = require('../models/Card')
const User = require('../models/User')

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

    socket.on("userActive", async (value, view) => {
        let userId
        if (view) {
            userId = await Card.find({ cardName: value, isDelete: false })
            userId = userId[0].user.toString();
        }
        else {
            userId = value
        }
        socket.join(userId.toString());
        console.log(io.sockets.adapter.rooms);
        let user = await User.findById(userId)
        if (!view) {
            user.active++;
            user.save()
        }
        io.to(userId).emit("active-changes", user.active);
        socket.on('disconnect', async () => {
            if (!view) {
                let user = await User.findById(userId)
                user.active--;
                user.save()
                io.to(userId.toString()).emit("active-changes", user.active)
            }
        });
    })
});