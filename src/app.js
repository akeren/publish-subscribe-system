const express = require('express');
const publishRouter = require('./routes/publishRoutes');
const subscribeRouter = require('./routes/subscribeRoutes');

const app = express();

app.use('/api/v1/publish', publishRouter);
app.use('/api/v1/subscriber', subscribeRouter);

module.exports = app;
