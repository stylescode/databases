var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, result) => {
      if (err) {
        console.log(`ERROR EXCECUTING getALL. ERROR = ${JSON.stringify(err)}`);
        // next(err);
        res.send({err});
      } else {
        console.log(`SUCCESS EXCECUTING getALL. RESULT = ${JSON.stringify(result)}`);
        res.send({result});
      }
    });

  }, // a function which handles a get request for all messages
  post: function (req, res) {
    console.log(JSON.stringify(req.body));
    // variables for req.body.properties
    const username = req.body.username;
    const message = req.body.message;
    const roomname = req.body.roomname;
    let response;
    models.messages.create(message, username, roomname, (err, results) => {
      console.log('ATTEMPTING TO CREATE MESSAGE');
      if (err) {
        console.log('FAILED TO CREATE MESSAGE');
        res.send({err});
      } else {
        console.log('SUCCESSFULY CREATED MESSAGE');
        response = results;
        console.log('ATTEMPTING TO GET ALL USERS');
        // query db to retrieve list of users
        models.users.getAll((error, result) => {
          if (error) {
            console.log('FAILED TO GET ALL USERS');
            callback(error);
          } else {
            console.log(`GET ALL USERS SUCCESSFUL: RESULTS = ${JSON.stringify(result)}`);
            (result) => {
              console.log(`THEN THIS`);
              // map over each and push the value to an array
              const usernames = [];
              result.forEach((element) => {
                usernames.push(element.created_by);
              });
              // if username is not in array then models.create(username)
              if (!usernames.includes(username)) {
                console.log('NEW USER DETECTED. ADDING TO USERS TABLE')
                models.users.create(username, (error, result) => {
                  if (error) {
                    console.log('ERROR ADDING TO USERS TABLE' + err);
                    callback(error);
                  }
                  console.log(`SUCCESSFULY ADDED ${username} TO USERS TABLE`);
                });

                res.send({results});
              }
            };
          }
        });
      }
    });
  } // a function which handles posting a message to the database
};


// request = text, username, room
// query

// SELECT friend