const mongoose = require('mongoose');


const RequestBookSchema = new mongoose.Schema({
    requestbook: String,
    author: String
});



module.exports = mongoose.model('request', RequestBookSchema);
