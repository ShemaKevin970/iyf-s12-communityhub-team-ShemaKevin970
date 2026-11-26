// Entry point: load config, start listening. Everything else lives in src/.
require('dotenv').config({ quiet: true });

const app = require('./src/app');

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.listen(PORT, () => {
  console.log(`CommunityHub API (${NODE_ENV}) at http://localhost:${PORT}`);
});
