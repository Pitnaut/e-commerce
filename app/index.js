const express = require('express');
const app = express();
const routes = require('./routes/routes');
const PORT = process.env.PORT || 3000;
const { jsonParser, urlEncodedParser } = require('./middlewares/bodyparser')

app.use(jsonParser);
app.use(urlEncodedParser);

app.get('/', (req, res) => {
  res.status(200).send('Welcome to SuperMusicShop');
});

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});


