const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();

const port = 8000;

app.use(bodyParser.urlencoded({extended:true}));

mongoClient.connect(db.url, (err, database)=>{
	var db = database.db("utilization");
	if (err) return console.log(err);
	
	require('./app/routes')(app, db);

	app.listen(port, ()=>{
		console.log('We are running in the port: ' + port)
	})
});

