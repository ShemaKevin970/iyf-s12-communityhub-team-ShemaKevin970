const express = require('express');
const postsRoutes = require('./posts');

const router = express.Router();

router.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
  });
});

router.use('/posts', postsRoutes);

module.exports = router;
router.get('/time', (req, res) => {
  res.json({
    currentTime: new Date().toISOString(),
    timestamp: Date.now(),
  });
});