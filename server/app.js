const express = require('express');
const mongoose = require('mongoose');

require('./config/config.js');

const app = express();
mongoose.connect(global.gConfig.database, {useNewUrlParser: true});

app.get('/providers', (req, res) => {
  // TODO
});

app.listen(global.gConfig.node_port, () => {
  console.log(`Server is listening on port ${global.gConfig.node_port}!`)
});
