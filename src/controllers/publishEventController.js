const redis = require('redis');

const publisher = redis.createClient();

const publishEventController = (req, res) => {
  const message = {
    topicId: req.params.id,
    data: {
      msg: 'hello',
    },
  };

  publisher.publish('notify-subscriber', JSON.stringify(message));
  res.send(`Event pulished successfully!`);
};

module.exports = publishEventController;
