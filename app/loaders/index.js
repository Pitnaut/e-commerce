const expressLoader = require('./express');
const passport = require('./passport');


module.exports = async (app) => {
  const expressApp = await expressLoader(app);

  expressApp.use(passport.initialize());
  expressApp.use(passport.session());

}

