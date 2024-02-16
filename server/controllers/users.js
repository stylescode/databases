var models = require('../models');

module.exports = {
  get: function (req, res) {
    console.log('req:', req.body);
    models.users.getAll((err, result) => {
      if (err) {
        console.log('error:', err);
        res.send(err);
      } else {
        console.log('res:', result);
        res.send(result);
      }
    });
  },

  post: function (req, res) {
    console.log(`POST to USERS. REQUEST BODY = ${JSON.stringify(req.body)}`);
    res.status(204);
    res.send();
  }
};
