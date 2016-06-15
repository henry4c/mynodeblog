var config = require('../config');
var Redis = require('ioredis');
var logger = require('./logger')

var client = new Redis({
  port: config.redis_port,
  host: config.redis_host,
  db: config.redis_db,
  password:'332a19c26144275fcccedb384521e0ef'
});

//var client = new Redis('redis://henry4c:332a19c26144275fcccedb384521e0ef@50.30.35.9:3507/0');

//client.auth('332a19c26144275fcccedb384521e0ef');

client.on('error', function (err) {
  if (err) {
    logger.error('connect to redis error, check your redis config', err);
    process.exit(1);
  }
});
exports = module.exports = client;
