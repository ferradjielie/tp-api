const authorRepository = require('../repositories/authorRepository');
    
 
  function findAllAuthors() {
    return authorRepository.getAllAuthors();
    }
    
    function findAuthorById(id) {
        return authorRepository.getAuthorById(id);
    }
   
    function createAuthor(author) {
         return authorRepository.addAuthor(author);
    }
   
    function editAuthor(id, data) {
         return authorRepository.updateAuthor(id, data);
    }
    function removeAuthor(id) {
          return authorRepository.deleteAuthor(id);
    }

    module.exports = {
       findAllAuthors,
       findAuthorById,
       createAuthor,
       editAuthor,
       removeAuthor
    };
