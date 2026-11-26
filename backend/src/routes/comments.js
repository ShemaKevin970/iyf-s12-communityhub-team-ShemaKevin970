
const express = require('express');
const comments = require('../controllers/commentsController');

const router = express.Router({ mergeParams: true });

router.get('/', comments.getComments);
router.post('/', comments.createComment);

module.exports = router;
