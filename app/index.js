const express = require('express')
const db = require('./db/queries')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT ?? 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (req, res) => {
  res.status(200).send('Welcome to backend hell!')
})

app.get('/products', db.getAllProducts)

app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`)
})