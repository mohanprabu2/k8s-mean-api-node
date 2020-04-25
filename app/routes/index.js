const utilizationRoute = require('./utilization_route')

module.exports = function(app, db) {
	utilizationRoute(app, db);
}