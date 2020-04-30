const ip = process.env.MONGO_DB_IP || 'localhost';
const port = process.env.MONGO_DB_PORT || '27017';

module.exports = {
		url : "mongodb://"+ip+":"+port+"/"
}

/*
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("utilization");
  dbo.collection("metrics").find({}, function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
*/