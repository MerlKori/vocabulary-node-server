const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const createDB = require('./create-db');

const wordsDB = createDB('db/words');

// const Datastore = require('nedb');
// const db = new Datastore({filename : 'db/words', autoload: true});
// const db_user = new Datastore({filename : 'db/user', autoload: true});

// function promisifyDB (fn, context) {
// 	return (...args) => {
// 		return new Promise((resolve, reject) => {
// 			fn.call(context, ...args, (error, data) => {
// 				if (error) return reject(error);
// 				resolve(data);
// 			});
// 		});
// 	}
// }


// const insert = promisifyDB(db.insert, db);
// insert({name : "Boris the Bladeaaaaaa", year: 1946});

// wordsDB.create({name : "Borissss the Bladeaaaaaa", year: 1941})
//   .then(data => console.log(data))
//   .catch(err => console.log(err));
/* Add */
// const cl = (err, data)=> console.log(data);
// db.insert({name : "Boris the Bladeasdasd", year: 1946}, cl);
// get 

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}!`);
});
