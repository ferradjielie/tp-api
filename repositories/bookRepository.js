

const _ = require('lodash');
const books = require('../data/books');
function getAllBooks() {
return books;
}

function getBookById(id) {
    return _.find(books, { id });
    }

    function addBook(book) {
        books.push(book);
        return book;
        }

        function updateBook(id, data) {
            const book = getBookById(id);
            if (book) {
            _.assign(book, data);
            }
            return book;
            }

            function deleteBook(id) {
                _.remove(books, { id });
                }

                module.exports = {
                    getAllBooks,
                    getBookById,
                    addBook,
                    updateBook,
                    deleteBook,
                    };
                    