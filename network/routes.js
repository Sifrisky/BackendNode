express = require('express');
const message = require('../components/message/response');

const routes = function(server){
    server.use('/message', message);
}

module.exports = routes;