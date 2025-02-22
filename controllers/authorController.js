const authorService = require('../services/authorService');

function getAllAuthors(req, res) {
  const authors = authorService.findAllAuthors();
  res.json(authors);
}

function getAuthorById(req, res) {
  const id = parseInt(req.params.id);
  const author = authorService.findAuthorById(id);
  if (author) {
    res.json(author);
  } else {
    res.status(404).json({ message: "Author not found" });
  }
}

function createAuthor(req, res) {
  const newAuthor = authorService.createAuthor(req.body);
  res.status(201).json(newAuthor);
}

function updateAuthor(req, res) {
  const id = parseInt(req.params.id);
  const updatedAuthor = authorService.editAuthor(id, req.body);
  if (updatedAuthor) {
    res.json(updatedAuthor);
  } else {
    res.status(404).json({ message: "Author not found" });
  }
}

function deleteAuthor(req, res) {
  const id = parseInt(req.params.id);
  const author = authorService.findAuthorById(id);
  if (author) {
    authorService.removeAuthor(id);
    res.status(204).send();
  } else {
    res.status(404).json({ message: "Author not found" });
  }
}

module.exports = {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
