const express = require("express");

const router = express.Router();
const { addBook, getBooks, getBookById, editBook, deleteBook } = require('../controllers/bookController.js');
const { sendMessage } = require("../controllers/messageControllers.js");
const { addRequestBook, getRequestBooks, deleteRequestedBook } = require('../controllers/requestController');
const { signUpUser, loginUser, allUsers } = require("../controllers/userController.js");
const chats = require('../data/data')
const { protect } = require('../middleware/authMiddleware');

router.post('/add', addBook);
router.get('/explore', getBooks);
router.get('/explore/:id', getBookById);
router.get('/edit/:id', getBookById);
router.post('/edit/:id', editBook);
router.delete('/edit/:id', deleteBook);

//User 
router.post('/signup', signUpUser);
router.post('/login', loginUser);
router.get('/users', protect, allUsers);

//Request Book
router.post('/request', addRequestBook)
router.get('/request', getRequestBooks)
router.delete('/request/:id', deleteRequestedBook);

//
// router.get('/chat', (req, res) => {
//     res.send(chats);
// })
module.exports = router;