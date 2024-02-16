var { dbConnection } = require('../db');

module.exports = {
  getAll: function (callback) {
    // create promise that represents submitted query
    console.log('ATTEMPTING DB QUERY');
    dbConnection.query(
      "SELECT user_name, created_at, user_message, room_name FROM messages INNER JOIN users ON users.id = created_by;"
      , (err, res) => {
        if (err) {
          console.log(`ERROR: QUERY FAILED. ERROR = ${err}`);
          callback(err);
        } else {
          console.log(`SUCCESSFUL QUERY. RESULT = ${JSON.stringify(res)}`);
          callback(null, res);
        }
      });

  }, // a function which produces all the messages

  // a function which can be used to insert a message into the database
  create: function (text, userName, roomName, callback) {
    // query INSERT messages
    dbConnection.query(
      `INSERT INTO messages (user_message, created_by, room_name) VALUES ("${text}", "${userName}", "${roomName}");`
      , (err, res) => {
        if (err) {
          console.log(`ERROR: QUERY FAILED. ERROR = ${err}`);
          callback(err);
        } else {
          console.log(`SUCCESSFUL QUERY. RESULT = ${JSON.stringify(res)}`);
          callback(null, res);
        }
      });
  }
};

// INSERT INTO messages (user_message, room_name, created_by) VALUES
// ("abc", "Lobby", "test1"),
// ("abcdef", "Lobby", "test2"),
// ("abchij", "Lobby", "test3"),
// ("abcklm", "Lobby", "test4"),
// ("abcnop", "Lobby", "test5");
