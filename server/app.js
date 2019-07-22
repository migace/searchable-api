const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const ProvidersRepository = require('./repositories/providers');

require('./config/config.js');

const app = express();
app.use(cors());
mongoose.connect(global.gConfig.database, {useNewUrlParser: true});

app.get('/providers', async (req, res) => {    
  try {
    const providersRepository = new ProvidersRepository();
    
    res.json(await providersRepository.getByParams(req.query));
  } catch (err) {
    res.send(err);
  }
});

app.listen(global.gConfig.node_port, () => {
  console.log(`Server is listening on port ${global.gConfig.node_port}!`)
});
