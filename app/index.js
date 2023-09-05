const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/routes');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.status(200).send('Welcome to SuperMusicShop');
});

app.use('/', routes);



app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});


