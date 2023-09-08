const express = require('express');
const app = express();
const routes = require('./routes/routes');
const PORT = process.env.PORT || 3000;
const { jsonParser, urlEncodedParser } = require('./middlewares/bodyparser');
// const session = require('express-session');
const db = require('./queries/auth');

app.use(jsonParser);
app.use(urlEncodedParser);

// const store = new session.MemoryStore();

// app.use(
//   session({
//     secret: 'D53gxl41G',
//     cookie: {
//       maxAge: 172800000,
//       secure: true,
//       sameSite: "none",
//     }, 
//     resave: false,
//     saveUninitialized: false,
//     store
//   })
// )

app.get('/', (req, res) => {
  res.status(200).send('Welcome to SuperMusicShop');
});

app.use('/', routes);



app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});


