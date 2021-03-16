const express = require('express');
const bookRoutes = require('./routes/booksRoutes');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('', bookRoutes);

app.listen(3000, () => {
  console.log('Server is ready');
});
