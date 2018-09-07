
const noteRoutes = require('./note_routes');

// In express, routes are wrapped in a function, which takes the express instance and a database as arguments

module.exports = function(app, db) {
  noteRoutes(app, db);
}
