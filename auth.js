/**
 * Authentication Module
 * @module routes/auth
 */

const jwtSecret = 'your_jwt_secret'; // This has to be the same key used in the JWTStrategy

const jwt = require('jsonwebtoken'),
  passport = require('passport');

require('./passport'); // Your local passport file

/**
 * Generate JWT token for authenticated user
 * @function generateJWTToken
 * @memberof module:routes/auth
 * @param {Object} user - User object
 * @param {string} user.Username - Username
 * @returns {string} JWT token
 * @private
 */
let generateJWTToken = (user) => {
  return jwt.sign(user, jwtSecret, {
    subject: user.Username, // This is the username you're encoding in the JWT
    expiresIn: '7d', // This specifies that the token will expire in 7 days
    algorithm: 'HS256' // This is the algorithm used to "sign" or encode the values of the JWT

  });
}

/**
 * User login endpoint
 * @name POST /login
 * @function
 * @memberof module:routes/auth
 * @param {Object} req - Express request object
 * @param {Object} req.body - Login credentials
 * @param {string} req.body.Username - User's username
 * @param {string} req.body.Password - User's password
 * @param {Object} res - Express response object
 * @returns {Object} 200 - User object and JWT token
 * @returns {Object} 400 - Authentication failed
 * @example
 * // Request format:
 * {
 *   "Username": "jane-smith",
 *   "Password": "samplePassword"
 * }
 * // Response format (success):
 * {
 *   "user": {
 *     "_id": "123",
 *     "Username": "jane-smith",
 *     "Email": "smith.jane@email.com",
 *     "FavoriteMovies": []
 *   },
 *   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 * }
 * // Response format (failure):
 * {
 *   "message": "Something is not right",
 *   "user": false
 * }
 */
module.exports = (router) => {
  router.post('/login', (req, res) => {
    passport.authenticate('local', { session: false }, (error, user, info) => {
      if (error || !user) {
        return res.status(400).json({
          message: 'Something is not right',
          user: user
        });
      }
      req.login(user, { session: false }, (error) => {
        if (error) {
          res.send(error);
        }
        let token = generateJWTToken(user.toJSON());
        return res.json({ user, token });
      });
    })(req, res);
  });
}