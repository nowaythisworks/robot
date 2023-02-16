// express server (nodejs) (console.log the IP)

const express = require('express');
const app = express();
const server = require('http').createServer(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.listen(3000, () => {
    console.log('Server listening at port %d', 3000);
    console.log('Full IP: http://' + server.address().address + ':' + server.address().port);
});