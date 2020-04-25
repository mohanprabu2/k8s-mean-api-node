module.exports = {
		url : "mongodb://localhost:27017/"
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