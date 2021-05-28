const express = require('express');
const bodyParser = require('body-parser');

const config = require('../config');
const client = require('./components/client/network.js');

const app = express();
app.use(bodyParser.json());

//ROUTER
app.use('/api/client', client);

app.listen(config.api.port, () => {
    console.log('Api escuchando en el puerto ', config.api.port);
});