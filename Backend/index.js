const connectToMongo = require('./db')
const express = require('express')
var cors = require('cors')

connectToMongo()

const app = express()
const port = 5000

app.use(cors())
app.use(express.json()); //middleware

app.get('/', (req, res) => {
  res.send('Ganpati Bappa Morya!')
})

app.use('/api/contactform', require('./routes/contactform'));

app.listen(port, () => {
  console.log(`Form listening on port http://localhost:${port}`)
})