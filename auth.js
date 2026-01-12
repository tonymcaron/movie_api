const jwtSecret = 'your_jwt_secret'; // This has to be the same key used in the JWTStrategy

const jwt = require('jsonwebtoken'),
  passport = require('passport');

require('./passport'); // Your local passport file

let generateJWTToken = (user) => {
  return jwt.sign(user, jwtSecret, {
    subject: user.Username, // This is the username you're encoding in the JWT
    expiresIn: '7d', // This specifies that the token will expire in 7 days
    algorithm: 'HS256' // This is the algorithm used to "sign" or encode the values of the JWT

  });
}

/**
 * POST /login
 *
 * Authenticates a user and returns a JWT token.
 *
 * @route POST /login
 * @group Authentication
 *
 * @param {Object} req.body - Login credentials
 * @param {string} req.body.Username - User's username
 * @param {string} req.body.Password - User's password
 *
 * @returns {Object} 200 - Successfully authenticated
 * @returns {Object} 200.user - Logged-in user object
 * @returns {string} 200.token - JWT authentication token
 *
 * @returns {Object} 400 - Authentication failed
 * @returns {string} 400.message - Error message
 *
 * @example request - Login
 * {
 *   "Username": "jane-smith",
 *   "Password": "samplePassword"
 * }
 *
 * @example response - 200
 * {
 *   "user": {
 *     "_id": "123",
 *     "Username": "jane-smith",
 *     "Email": "smith.jane@email.com",
 *     "FavoriteMovies": []
 *   },
 *   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 * }
 *
 * @example response - 400
 * {
 *   "message": "Something is not right"
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