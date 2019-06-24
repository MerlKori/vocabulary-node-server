
module.exports = (db, server, endpoint) => {
	server.route(endpoint)
		.get(function(req, res) {
			db.get({})
				.then(data => res.json(data))
				.catch(err => res.send(res.send));
		})
		.post(function(req, res) {
			// console.log(typeof req.body)
			db.create(req.body)
				.then(data => {
					res.json(data)
					// res.json({success: true, message: 'Successfully created new user.'});
				})
				.catch(err => res.send(res.send));
		})
		.put(function(req, res) {
			const fibdBy = {id: req.body.id};

			db.update(fibdBy, req.body, {})
				.then(data => {
					res.json(data)
					// res.json({success: true, message: 'Successfully created new user.'});
				})
				.catch(err => res.send(res.send));
			// db.update({year: 1946}, {name: "Doug the Head", year: 1940}, {});
			// res.send('Update the book');
		})
		.delete(function(req, res) {
			const fibdBy = {id: req.body.id};

			db.remove(fibdBy, {})
				.then(data => {
					res.json(data)
					// res.json({success: true, message: 'Successfully created new user.'});
				})
				.catch(err => res.send(res.send));
			// res.send('Delete the book');
		});
};
