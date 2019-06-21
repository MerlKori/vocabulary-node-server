const Datastore = require('nedb');

function promisifyDB (fn, context) {
	return (...args) => {
		return new Promise((resolve, reject) => {
			fn.call(context, ...args, (error, data) => {
				if (error) return reject(error);
				resolve(data);
			});
		});
	}
}

module.exports = filename => {
	const db = new Datastore({filename, autoload: true});

	return {
		create: promisifyDB(db.insert, db),
		get: promisifyDB(db.find, db),
		update: promisifyDB(db.update, db),
		remove: promisifyDB(db.remove, db)
	};
};
