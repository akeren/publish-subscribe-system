const redis = require('redis');

const subscriber = redis.createClient();

subscriber.on('message', (channel, message) => {
  console.log(`Data received: ${message}`);
});

subscriber.subscribe('notify-subscriber');

const subscribeOneEventController = (req, res) => {
  res.send('I am the first subscriber!');
};

module.exports = subscribeOneEventController;
