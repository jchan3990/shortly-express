const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  if (!req.cookies.shortlyid) {
    models.Sessions.create()
      .then((hashData) => {
        return models.Sessions.get({id: hashData.insertId});
      })
      .then((sessionData) => {
        return res.cookie('shortlyid', sessionData.hash);
      })
      .then(session => {
        // console.log(session.cookie, 'asfsf')
        req.session = session;
      });
  } else {
    var hash = req.cookies.shortlyid;
    models.Sessions.get({hash});

  }

  // Check for cookies
  // If cookies exist
  // Session exists (returning user)
  // Get and set session
  // If cookies don't exist
  // Create new session
  // Get and set session
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

