const expressLoader = require('./express');

module.exports = async (app) => {
  const expressApp = await expressLoader(app);
}