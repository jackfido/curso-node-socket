// HTML References
const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMessage = document.querySelector('#txtMessage');
const btnSend = document.querySelector('#btnSend');

const socket = io();

socket.on('connect', () =>{
    //console.log('Connected');

    this.lblOnline.style.display = '';
    this.lblOffline.style.display = 'none';
});

socket.on('disconnect', () =>{
    //console.log('Disconnected');

    this.lblOnline.style.display = 'none';
    this.lblOffline.style.display = '';
});

socket.on('send-message', (payload) =>{
    console.log(payload);
});

btnSend.addEventListener('click', () => {
    const message = txtMessage.value;
    const payload = {
        message,
        id: '123ABC',
        date: new Date().getTime()
    }

    // console.log(message);
    socket.emit('send-message', payload, (id)=>{
        console.log('Desde el server:', id);
    });
})