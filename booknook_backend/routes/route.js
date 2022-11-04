const express = require("express");

const router = express.Router();
const { addBook, getBooks, getBookById, editBook, deleteBook } = require('../controllers/bookController.js');
const { addRequestBook, getRequestBooks, deleteRequestedBook } = require('../controllers/requestController');
const { signUpUser, loginUser } = require("../controllers/userController.js");
const chats = require('../data/data')

router.post('/add', addBook);
router.get('/explore', getBooks);
router.get('/explore/:id', getBookById);
router.get('/edit/:id', getBookById);
router.post('/edit/:id', editBook);
router.delete('/edit/:id', deleteBook);

//User 
router.post('/signup', signUpUser);
router.post('/login', loginUser);

//Request Book
router.post('/request', addRequestBook)
router.get('/request', getRequestBooks)
router.delete('/request/:id', deleteRequestedBook);

//
router.get('/chat', (req, res) => {
    res.send(chats)
})
router.get('/chat/:id', (req, res) => {
    console.log(req.params.id);
    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat);
})

module.exports = router;