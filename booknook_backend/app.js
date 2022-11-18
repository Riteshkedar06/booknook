//Imports

const express = require("express");
const dotenv = require("dotenv");
const app = express();
const router = require("./routes/route")
const chatRouter = require("./routes/chatRoutes")
const messagesRouter = require("./routes/messageRoutes")
const cors = require("cors");
const bodyParser = require('body-parser')
const PORT = 8000
const mongoose = require("mongoose");
const { notFound, errorHandler } = require('./middleware/errorMiddleware');



//dotenv config
dotenv.config(); app.use(cors());






//Database connection
const user = process.env.DB_USERNAME;
const password = process.env.DB_password;
const dbUrl = `MongoDB linK`;
mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connections error:"));
db.once("open", () => {
    console.log("Database connected");
});
//use
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);
app.use('/chat', chatRouter);
app.use('/message', messagesRouter);

//Middleware
// app.use(notFound);
// app.use(errorHandler);



app.get('/', (req, res) => {
    res.send('hello')
});





// start express server on port 8000
app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`);
});
