const bodyParser = require('body-parser');
const session = require('express-session')
require('dotenv').config();
const SESSION_SECRET = process.env.PGUSER;

module.exports = (app) => {

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(
    session({  
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: false,
        maxAge: 24 * 60 * 60 * 1000
      }
    })
  );

  return app;

}