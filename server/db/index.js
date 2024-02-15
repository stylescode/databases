var mysql = require('mysql2');

// Create a database connection and export it from this file.
exports.dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'chat'
});
// Confirm that the credentials supplied for the connection are correct.

dbConnection.connect();


// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'


