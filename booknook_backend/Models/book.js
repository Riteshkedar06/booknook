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
    condition: Number,
    contact: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },

});



module.exports = mongoose.model('book', BookSchema);
