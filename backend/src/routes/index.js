
const express = require('express');
const postsRoutes = require('./posts');
const usersRoutes = require('./users');

const router = express.Router();

router.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
  });
});

router.get('/time', (req, res) => {
  res.json({
    currentTime: new Date().toISOString(),
    timestamp: Date.now(),
  });
});

router.use('/posts', postsRoutes);
router.use('/users', usersRoutes);

module.exports = router;
