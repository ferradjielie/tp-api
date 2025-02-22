const _ = require('lodash');
const authors = require('../data/authors');

    function getAllAuthors() {
        return authors;
    }

    function getAuthorById(id) {
        return _.find(authors, {id})

    }

    function addAuthor(author) {
            authors.push(author);
            return author;
            }

    function updateAuthor(id, data) {
            const author= getAuthorById(id);
            if (author) {
            _.assign(author, data);
            }
            return author;
            }

        function deleteAuthor(id) {
             _.remove(authors, { id });
                }

                module.exports = {
                    getAllAuthors,
                    getAuthorById,
                    addAuthor,
                    updateAuthor,
                    deleteAuthor,
                    };