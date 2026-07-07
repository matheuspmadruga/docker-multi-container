const keys = require('./keys'); //Import the keys file

//Express API Setup
const express = require('express'); //Import express to handle HTTP routes
const bodyParser = require('body-parser'); //Import body-parser library
const cors = require('cors'); //Import cors library to permit communication between React and Express API

const app = express(); //Create the app object to handle HTTP requests
app.use(cors()); //Permit cross-origin data sharing
app.use(bodyParser.json()); //Parse incoming requests bodies in a middleware before your handlers, available under the req.body property

//Postgres Client Setup
const { Pool } = require('pg'); //Import the Pool object from 'pg' library
const pgClient = new Pool({     //Instantiate the client with your credentials
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort,
    ssl:
        process.env.NODE_ENV !== 'production'
            ? false
            : { rejectUnauthorized: false }, //Apply the production update we learned
});

// 3. This listener ensures the table is ONLY created AFTER a successful connection
pgClient.on("connect", (client) => {
    client
        .query("CREATE TABLE IF NOT EXISTS values (number INT)")
        .catch((err) => console.error(err));
});