const notFound = (req, res) => {
  res.status(404).json({
    error: `Route not found: ${req.method} ${req.originalUrl}`,
  });
};

const errorHandler = (err, req, res, next) => {
  const status = err.statusCode || err.status || 500;

  if (status >= 500) {
    console.error(err.stack);
  }

  const message = status >= 500 ? 'Internal Server Error' : err.message;
  res.status(status).json({ error: message });
};

module.exports = { notFound, errorHandler };
