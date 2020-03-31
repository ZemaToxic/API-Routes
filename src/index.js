// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const bans = require('./routes/bans');
const timeouts = require('./routes/timeouts');
const commands = require('./routes/commands');
const deleted = require('./routes/deleted');
const databaseMiddle = require('./middleware/database');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const path = require('path');
// Change the Directory incase of spawned as child
process.chdir(__dirname);
process.title = `API/database/${path.basename(__dirname)}`;

// defining the Express app
const app = express();

const { DB_HOST, DB_NAME_1, DB_NAME_2, DB_NAME_3, DB_USER, DB_CLIENT } = process.env

// MIDDLEWARES
app.use(databaseMiddle.database({
    client: DB_CLIENT,
    connectionInfo: { host: DB_HOST, user: DB_USER, database: DB_NAME_1 }
  },{
    client: DB_CLIENT,
    connectionInfo: { host: DB_HOST, user: DB_USER, database: DB_NAME_2 }
  },{
    client: DB_CLIENT,
    connectionInfo: { host: DB_HOST, user: DB_USER, database: DB_NAME_3 }
  })
)

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// Default Endpoint, i.e no route specified 
app.get('/', (req, res) => {
  res.send('Landing page ~~');
});

app.get('/bans', bans.get);
app.post('/bans', bans.post);

app.get('/timeouts', timeouts.get);
app.post('/timeouts', timeouts.post);

app.get('/deleted', deleted.get);
app.post('/deleted', deleted.post);

app.get('/commands', commands.get);
app.post('/commands', commands.post);
app.delete('/commands', commands.del);
app.patch('/commands', commands.patch);

// starting the server
app.listen(3002, () => { console.log('listening on port 3002'); });