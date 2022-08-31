const express = require('express');

const { setExpressLruCache } = require('./cache');

const app = express();

const { txHistory } = require('./routes');

// env
const cacheOptions = {
  max: 5000,
  // maxSize: 5000,
  ttl: 1000 * 60 * 1,
  updateAgeOnGet: true,
};
// If possible use redis
setExpressLruCache(app, cacheOptions);

app.use(txHistory);

app.get('/', (req, res) => {
  res.send('Hello World, Blocklet!');
});

module.exports = app;
