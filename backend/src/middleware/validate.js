const bodyOf = (req) => req.body ?? {};

const isText = (value, min = 1) =>
  typeof value === 'string' && value.trim().length >= min;

const validateId = (req, res, next) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id < 1) {
    return res.status(400).json({
      error: 'Post id must be a positive whole number',
    });
  }

  req.postId = id;
  next();
};

const validatePost = (req, res, next) => {
  const { title, content, author } = bodyOf(req);
  const details = [];

  if (!isText(title, 3)) details.push('title must be at least 3 characters');
  if (!isText(content, 10)) details.push('content must be at least 10 characters');
  if (!isText(author)) details.push('author is required');

  if (details.length > 0) {
    return res.status(400).json({ error: 'Validation failed', details });
  }

  next();
};

const validatePostUpdate = (req, res, next) => {
  const { title, content } = bodyOf(req);
  const details = [];

  if (title === undefined && content === undefined) {
    details.push('send title and/or content');
  }

  if (title !== undefined && !isText(title, 3)) {
    details.push('title must be at least 3 characters');
  }

  if (content !== undefined && !isText(content, 10)) {
    details.push('content must be at least 10 characters');
  }

  if (details.length > 0) {
    return res.status(400).json({ error: 'Validation failed', details });
  }

  next();
};

module.exports = { validateId, validatePost, validatePostUpdate };
