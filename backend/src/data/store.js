const store = {
  posts: [
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
  ],
  nextId: 4,
  comments: [],
  nextCommentId: 1,
};

module.exports = store;
