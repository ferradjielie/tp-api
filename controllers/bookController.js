const bookService = require('../services/bookService');
function getAllBooks(req, res) {
const books = bookService.findAllBooks();
res.json(books);
}

function getBookById(req, res) {
    const id = parseInt(req.params.id); 
    const book = bookService.findBookById(id);
    if (book) {
    res.json(book);
    } else {
    res.status(404).json({ message: "Book not found" });
    }
    }

    
    function createBook(req, res) {
        const newBook = bookService.createBook(req.body);
        res.status(201).json(newBook);
        }

        function updateBook(req, res) {
            const id = parseInt(req.params.id)
            const updatedBook = bookService.editBook(id, req.body);
            if (updatedBook) {
            res.json(updatedBook);
            } else {
            res.status(404).json({ message: "Book not found" });
            }
            }


            function deleteBook(req, res) {
                const id = parseInt(req.params.id)
                const book = bookService.findBookById(id);
                if (book) {
                bookService.removeBook(id);
                res.status(204).send();
                } else {
                res.status(404).json({ message: "Book not found" });
                }
                }

                module.exports = {
                    getAllBooks,
                    getBookById,
                    createBook,
                    updateBook,
                    deleteBook,
                    };
                    