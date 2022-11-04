const RequestBook = require('../Models/bookRequest')

module.exports.addRequestBook = async (req, res) => {
    const requestbook = req.body;
    const newRequestBook = new RequestBook(requestbook);
    try {
        await newRequestBook.save();
        res.status(201).json(newRequestBook);
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

module.exports.getRequestBooks = async (req, res) => {
    try {
        const requestBook = await RequestBook.find({});
        res.status(200).json(requestBook);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
module.exports.deleteRequestedBook = async (req, res) => {
    const { id } = req.params
    try {
        await RequestBook.findByIdAndDelete({ '_id': id });
        res.status(200).json({ message: "Book deleted succesfully" });
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}