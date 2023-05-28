const socketController = (socket) => {
    console.log('Connected Socket', socket.id);

    socket.on('disconnect', ()=> {
        console.log('Disconnected Socket', socket.id);
    });

    socket.on('send-message',(payload, callback)=>{
        //console.log(payload);
        const id = 1234567890;
        callback(id);

        socket.broadcast.emit('send-message',payload);
    })
};

module.exports = {
    socketController
}