/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/
const jwt = require('jsonwebtoken');

const { jwtSecret } = require('../config/secrets.js')

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if(token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if(err) {
        // the token is not valid
        res.status(401).json({ you: "can't handle this!"})
      } else {
        req.user = { joke: decodedToken.joke };

        next();
      }
    })
  } else {
    res.status(401).json({ you: 'shall not pass!'})
  }
};


