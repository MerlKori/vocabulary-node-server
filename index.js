const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const createDB = require('./create-db');

const wordsDB = createDB('db/words'); 

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}!`);
});
