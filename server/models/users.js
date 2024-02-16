var { dbConnection } = require('../db');

module.exports = {
  getAll: (callback) => {
    dbConnection.query('SELECT DISTINCT created_by FROM messages', (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },

  create: function () {}
};
