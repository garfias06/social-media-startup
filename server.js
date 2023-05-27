// Importing packages and folders to the server.
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = 3001;
const app = express();

// Express Middleware.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sync connection to DB .
db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server for ${activity} running on port ${PORT}!`);
    });
  });
  