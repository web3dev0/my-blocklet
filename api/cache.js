const LRU = require('lru-cache');

function setExpressLruCache(app, options) {
  app.locals.cache = new LRU(options);
}
module.exports = {
  setExpressLruCache,
};
