
const store = require('../data/store');

// GET /api/posts/:id/comments
const getComments = (req, res) => {
  const post = store.posts.find((p) => p.id === Number(req.params.id));

  if (!post) {
    return res.status(404).json({
      error: 'Post not found',
    });
  }

  const comments = store.comments.filter(
    (comment) => comment.postId === post.id
  );

  res.status(200).json({
    success: true,
    count: comments.length,
    data: comments,
  });
};

// POST /api/posts/:id/comments
const createComment = (req, res) => {
  const post = store.posts.find((p) => p.id === Number(req.params.id));

  if (!post) {
    return res.status(404).json({
      error: 'Post not found',
    });
  }

  const { author, text } = req.body;

  if (typeof author !== 'string' || !author.trim()) {
    return res.status(400).json({
      error: 'Author is required',
    });
  }

  if (typeof text !== 'string' || !text.trim()) {
    return res.status(400).json({
      error: 'Comment text is required',
    });
  }

  const comment = {
    id: store.nextCommentId++,
    postId: post.id,
    author: author.trim(),
    text: text.trim(),
    createdAt: new Date().toISOString(),
  };

  store.comments.push(comment);

  res.status(201).json({
    success: true,
    message: 'Comment created successfully',
    data: comment,
  });
};

module.exports = {
  getComments,
  createComment,
};
