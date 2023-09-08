const expressLoader = require('./express');
const passportLoader = require('./passport');

module.exports = async (app) => {
  const expressApp = await expressLoader(app);

  const passportLoader = await passportLoader(expressApp)
}