//Imports

const express = require("express");
const dotenv = require("dotenv");
const app = express();
const router = require("./routes/route")
const cors = require("cors");
const bodyParser = require('body-parser')
const PORT = 8000
const mongoose = require("mongoose");
const { notFound, errorHandler } = require('./middleware/errorMiddleware');


//dotenv config
dotenv.config();

//Database connection
const user = process.env.DB_USERNAME;
const password = process.env.DB_password;

const dbUrl = "mongodb://ritesh:XHWDEMRmW8Z6Ki4y@ac-resmg7g-shard-00-00.3cwwsjs.mongodb.net:27017,ac-resmg7g-shard-00-01.3cwwsjs.mongodb.net:27017,ac-resmg7g-shard-00-02.3cwwsjs.mongodb.net:27017/BOOKNOOK?ssl=true&replicaSet=atlas-yzg433-shard-0&authSource=admin&retryWrites=true&w=majority";
// const dbUrl = `mongodb://${user}:${password}@ac-resmg7g-shard-00-00.3cwwsjs.mongodb.net:27017,ac-resmg7g-shard-00-01.3cwwsjs.mongodb.net:27017,ac-resmg7g-shard-00-02.3cwwsjs.mongodb.net:27017/BOOKNOOK?ssl=true&replicaSet=atlas-yzg433-shard-0&authSource=admin&retryWrites=true&w=majority`;
mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connextions error:"));
db.once("open", () => {
    console.log("Database connected");
});

//use
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/', router);


app.get('/', (req, res) => {
    res.send('hello')
});
app.use(notFound);
app.use(errorHandler);



// start express server on port 8000
app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`);
});