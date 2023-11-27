// socketHandler.js
const { Server } = require("socket.io");

function initializeSocket(server) {
    const io = new Server(server, {
        cors: {
            origin: process.env.WEB_URL, // Use your actual frontend URL
            methods: ["GET", "POST"],
        },
    });




    io.on("connection", (socket) => {
        console.log(`User Connected: ${socket.id}`);

        socket.on("join_room", (data) => {
            socket.join(data);
            console.log(`User with ID: ${socket.id} joined room: ${data}`);
        });

        socket.on("send_message", (data) => {
            console.log(data);
        });

        socket.on("disconnect", () => {
            console.log("User Disconnected", socket.id);
        });
    });
}

module.exports = {
    initializeSocket,
};