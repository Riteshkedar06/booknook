const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    userName: String,
    imgUrl: String,
    description: String,
    purchasedOn: String,
    usedBy: Number,
    condition: Number
});



module.exports = mongoose.model('book', BookSchema);
