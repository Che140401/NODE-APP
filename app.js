const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Github Actions! Welcome back to sudden');
});

// Export only the app (no listen here)
module.exports = app;
