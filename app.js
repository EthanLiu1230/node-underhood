const express = require('express');

const app = express();

app.listen(3000);

app.get('/', (req, res) => {

  // express method
  // 1. Automatically set content type depend on the content we provide
  // res.send('<p>homepage</p>');

  res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  res.sendFile('./views/index');
});

// at bottom of app.js file
app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname });
})
