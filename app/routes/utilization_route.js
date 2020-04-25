module.exports = function(app, db) {
	app.get('/util', (req, res)=>{
		db.collection('metrics').find({}).limit(10).sort({time:-1}).toArray(function(err, items){
			if(err) {
				console.log('Error fetching metrics items');
			} else {
				res.send(items);
			}
		});
	});
}