const Book = require('../Models/book')

module.exports.addBook = async (req, res) => {
    const book = req.body;
    const newBook = new Book(book);
    try {
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

module.exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json(books);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

module.exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        res.status(200).json(book);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

module.exports.editBook = async (req, res) => {
    const book = req.body;
    const editBook = new Book(book);
    const { id } = req.params
    try {
        await Book.findByIdAndUpdate({ '_id': id }, editBook);
        res.status(201).json(editBook);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

module.exports.deleteBook = async (req, res) => {
    const { id } = req.params
    try {
        await Book.findByIdAndDelete({ '_id': id });
        res.status(200).json({ message: "Book deleted succesfully" });
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

