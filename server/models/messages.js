var { dbConnection } = require('../db');

module.exports = {
  getAll: function () {
    // establish connection
    dbConnection.connect();
    // create promise that represents submitted query
    dbConnection.query(
      `SELECT
      messages.user_message,
      messages.created_by
      FROM messages
      INNER JOIN rooms ON messages.room = rooms.id
      INNER JOIN users ON messages.created_by = users.id`
    );

  }, // a function which produces all the messages



  create: function () {} // a function which can be used to insert a message into the database
};
