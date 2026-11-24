const express = require('express');
const posts = require('../controllers/postsController');
const {
  validateId,
  validatePost,
  validatePostUpdate,
} = require('../middleware/validate');

const router = express.Router();

router.get('/', posts.getAllPosts);
router.get('/:id', validateId, posts.getPostById);
router.post('/', validatePost, posts.createPost);
router.put('/:id', validateId, validatePostUpdate, posts.updatePost);
router.delete('/:id', validateId, posts.deletePost);
router.patch('/:id/like', validateId, posts.likePost);

module.exports = router;