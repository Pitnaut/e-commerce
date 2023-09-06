const bodyParser = require('body-parser');

module.exports = {
  jsonParser: bodyParser.json(),
  urlEncodedParser: bodyParser.urlencoded({ extended: true }),
};