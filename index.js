const express = require('express');
const routes = require('./src/route');
const server = express();

server.use(express.json());
server.use(routes);

server.listen(3000, () => {
    console.log("servidor rodando na porta 3000");
});

module.exports = server;