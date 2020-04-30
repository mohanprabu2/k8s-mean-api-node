const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();

const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 
// Cross Origin middleware
app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*")
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
 next()
})

mongoClient.connect(db.url, (err, database)=>{
	var db = database.db("utilization");
	if (err) return console.log(err);
	
	require('./app/routes')(app, db);

	app.listen(port, ()=>{
		console.log('We are running in the port: ' + port)
	})
});

