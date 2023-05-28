const express = require('express');
const cors = require('cors');
const { socketController } = require('../sockets/controllers');

class Server{
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);
        
        this.paths = {};

        //Midlewares
        this.midlewares();

        // Sockets configurations
        this.sockets();
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log('Server running on port: ', this.port);
        });
    }

    midlewares() {
        // CORS
        this.app.use(cors());

        // public directory
        this.app.use(express.static('public'));
    }

    sockets() {
        this.io.on('connection', socketController);
    }
}

module.exports = Server;