const store = require('../data/store');

const findPost = (id) => store.posts.find((p) => p.id === id);

const sorters = {
  newest: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  oldest: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
  popular: (a, b) => b.likes - a.likes,
};

const getAllPosts = (req, res) => {
  const { author, search, sort = 'newest' } = req.query;

  let result = [...store.posts];

  if (author) {
    result = result.filter((p) => p.author.toLowerCase() === author.toLowerCase());
  }

  if (search) {
    const term = search.toLowerCase();
    result = result.filter((p) => p.title.toLowerCase().includes(term));
  }

  if (!sorters[sort]) {
    return res.status(400).json({
      error: 'sort must be newest, oldest or popular',
    });
  }

  result.sort(sorters[sort]);

  const page = Number(req.query.page ?? 1);
  const limit = Number(req.query.limit ?? 10);

  if (!Number.isInteger(page) || page < 1 ||
      !Number.isInteger(limit) || limit < 1) {
    return res.status(400).json({
      error: 'page and limit must be positive whole numbers',
    });
  }

  const start = (page - 1) * limit;

  res.json({
    posts: result.slice(start, start + limit),
    pagination: {
      page,
      limit,
      total: result.length,
      pages: Math.ceil(result.length / limit),
    },
  });
};

const getPostById = (req, res) => {
  const post = findPost(req.postId);

  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }

  res.json(post);
};

const createPost = (req, res) => {
  const { title, content, author } = req.body;

  const post = {
    id: store.nextId++,
    title: title.trim(),
    content: content.trim(),
    author: author.trim(),
    createdAt: new Date().toISOString(),
    likes: 0,
  };

  store.posts.push(post);
  res.status(201).json(post);
};

const updatePost = (req, res) => {
  const post = findPost(req.postId);

  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }

  const { title, content } = req.body;

  if (title !== undefined) post.title = title.trim();
  if (content !== undefined) post.content = content.trim();

  post.updatedAt = new Date().toISOString();
  res.json(post);
};

const deletePost = (req, res) => {
  const index = store.posts.findIndex((p) => p.id === req.postId);

  if (index === -1) {
    return res.status(404).json({ error: 'Post not found' });
  }

  store.posts.splice(index, 1);
  res.status(204).end();
};

const likePost = (req, res) => {
  const post = findPost(req.postId);

  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }

  post.likes += 1;
  res.json(post);
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  likePost,
};
