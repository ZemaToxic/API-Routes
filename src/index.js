// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const database = require('./routes/database');
const databaseMiddle = require('./middleware/database');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

// defining the Express app
const app = express();

const {
  DB_HOST,
  DB_NAME,
  DB_USER,
  DB_CLIENT,
} = process.env

// MIDDLEWARES
app
  .use(databaseMiddle.database({
    client: DB_CLIENT,
    connectionInfo: {
      host: DB_HOST,
      user: DB_USER,
      database: DB_NAME
    }
  }))

// // adding Helmet to enhance your API's security
// app.use(helmet());

// // using bodyParser to parse JSON bodies into JS objects
// app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all responseArray 
app.get('/', (req, res) => {
  res.send('Landing page ~~');
});

app.get('/database', database.get);
app.post('/database', database.post);

// starting the server
app.listen(3002, () => {
  console.log('listening on port 3002');
});