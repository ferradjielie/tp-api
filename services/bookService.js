const bookRepository = require('../repositories/bookRepository');
function findAllBooks() {
return bookRepository.getAllBooks();
}
function findBookById(id) {
return bookRepository.getBookById(id);
}
function createBook(book) {
return bookRepository.addBook(book);
}
function editBook(id, data) {
return bookRepository.updateBook(id, data);
}
function removeBook(id) {
return bookRepository.deleteBook(id);
}
module.exports = {
findAllBooks,
findBookById,
createBook,
editBook,
removeBook,
};
