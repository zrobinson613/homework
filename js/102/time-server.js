'use strict';
const net = require('net');

/*function zerofill(n) {
    return (n < 10 ? '0' : '') + n;
}*/

const server = net.createServer((socket) => {
    let data = new Date();
    let year = data.getFullYear();
    let month = data.getMonth() > 9 ? (data.getMonth() + 1) : '0' + (data.getMonth() + 1);
    let dayDate = data.getDate() > 9 ? (data.getDate()) : '0' + (data.getDate());
    let hours = data.getHours() > 9 ? (data.getHours()) : '0' + (data.getHours());
    let minutes = data.getMinutes() > 9 ? (data.getMinutes()) : '0' + (data.getMinutes());

    socket.write(`${year}-${month}-${dayDate} ${hours}:${minutes}\n`);
    socket.end();
});

server.listen(process.argv[2]);