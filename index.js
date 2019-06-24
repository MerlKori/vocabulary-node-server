const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const createHandlers = require('./CRUD/index');
const createDB = require('./create-db');
const wordsDB = createDB('db/words');
const bodyParser = require('body-parser');

app.use(function (req, res, next) {
	res.set({
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'DELETE,GET,POST,PUT, OPTIONS',
		"Content-Type": "application/json",
		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
	});
	next();
});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


createHandlers(wordsDB, app, '/');

app.listen(PORT, function () {
	console.log(`Server listening on port ${PORT}!`);
});
