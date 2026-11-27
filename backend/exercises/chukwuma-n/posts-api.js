
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample posts
const posts = [
  {
    id: 1,
    title: 'Getting Started with Node.js',
    content: 'Node.js runs JavaScript outside the browser.',
    author: 'amina',
    createdAt: '2026-11-02T09:00:00Z',
    likes: 12,
  },
  {
    id: 2,
    title: 'Express Routing in Ten Minutes',
    content: 'A route is a method, a path and a handler.',
    author: 'brian',
    createdAt: '2026-11-05T14:30:00Z',
    likes: 30,
  },
  {
    id: 3,
    title: 'Why Status Codes Matter',
    content: '200, 201, 400, 404: the client reads the number first.',
    author: 'amina',
    createdAt: '2026-11-08T08:15:00Z',
    likes: 7,
  },
  {
    id: 4,
    title: 'Query Strings vs Route Params',
    content: 'Params name the thing. Query strings filter the list.',
    author: 'cyrus',
    createdAt: '2026-11-10T17:45:00Z',
    likes: 19,
  },
];

// Welcome route
app.get('/', (req, res) => {
  res.send('Welcome to CommunityHub API');
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
  });
});

// Get all posts with filtering, sorting and pagination
app.get('/api/posts', (req, res) => {
  const { author, search, sort = 'newest' } = req.query;

  let result = [...posts];

  // Filter by author
  if (author) {
    result = result.filter(
      (post) => post.author.toLowerCase() === author.toLowerCase()
    );
  }

  // Search post titles
  if (search) {
    result = result.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Sort posts
  if (!['newest', 'oldest', 'popular'].includes(sort)) {
    return res.status(400).json({
      error: 'sort must be newest, oldest or popular',
    });
  }

  if (sort === 'newest') {
    result.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  } else if (sort === 'oldest') {
    result.sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  } else if (sort === 'popular') {
    result.sort((a, b) => b.likes - a.likes);
  }

  // Pagination
  const page = req.query.page === undefined ? 1 : Number(req.query.page);
  const limit = req.query.limit === undefined ? 10 : Number(req.query.limit);

  if (
    !Number.isInteger(page) ||
    page < 1 ||
    !Number.isInteger(limit) ||
    limit < 1
  ) {
    return res.status(400).json({
      error: 'page and limit must be positive whole numbers',
    });
  }

  const total = result.length;
  const pages = Math.ceil(total / limit);
  const startIndex = (page - 1) * limit;
  const paginatedPosts = result.slice(startIndex, startIndex + limit);

  res.json({
    posts: paginatedPosts,
    pagination: {
      page,
      limit,
      total,
      pages,
    },
  });
});

// Get one post by ID
app.get('/api/posts/:id', (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id)) {
    return res.status(400).json({
      error: 'Post id must be a whole number',
    });
  }

  const post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({
      error: 'Post not found',
    });
  }

  res.json(post);
});

// Handle unknown routes (must be last)
app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found',
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Posts API running at http://localhost:${PORT}`);
});
