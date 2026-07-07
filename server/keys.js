module.exports = { //Export the objetc to be visible for the other folders
    redisHost: process.env.REDIS_HOST, //Capture the redis route url
    redisPort: process.env.REDIS_PORT, //Capture the redis port container
    pgUser: process.env.PGUSER, //Name of user DB
    pgHost: process.env.PGHOST, //Route of DB
    pgDatabase: process.env.PGDATABASE, //Name of DB
    pgPassword: process.env.PGPASSWORD, //Password DB
    pgPort: process.env.PGPORT // DB Port
};