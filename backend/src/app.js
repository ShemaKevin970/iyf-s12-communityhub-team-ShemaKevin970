// Builds the app. No listen() here, so tests can start it on any port.
const express = require('express');
const logger = require('./middleware/logger');
const { notFound, errorHandler } = require('./middleware/errorHandler');
const routes = require('./routes');

const app = express();

// 1. Middleware that runs on every request — order matters, top to bottom.
app.use(logger);
app.use(express.json());

// 2. Routes
app.get('/', (req, res) => {
  res.send('Welcome to CommunityHub API');
});
app.get('/about', (req, res) => {
  res.json({
    name: 'CommunityHub',
    description: 'A platform for sharing ideas and connecting with the community.',
    version: '1.0.0',
  });
});
app.use('/api', routes);

// 3. Error handling — always last, in this order.
app.use(notFound);
app.use(errorHandler);

module.exports = app;
