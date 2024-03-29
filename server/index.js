const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors')
connectToMongo();
const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());
// Available Routes
app.use('/api/v1', require('./Routes/Profile'))
app.use('/api/v1', require('./Routes/auth'))
app.use('/api/v1',require('./Routes/Require'))
app.listen(port, () => {
  console.log(`Developer Application's backend server is listening on port ${port}`)
})

app.get('/', (req, res) => {
  res.send('Hello from Express!')
})