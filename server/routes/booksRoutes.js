const express = require('express');
const router = express.Router();
const {
  getBooks,
  createBook,
  deleteBook,
} = require('../controller/booksListController');
const {getBookById, updateBook} = require('../controller/bookIdController');

router.get('/books', getBooks);
router.delete('/books/:id', deleteBook);
router.get('/books/:id', getBookById);
router.post('/createBook', createBook);
router.patch('/book-update/:id', updateBook);

module.exports = router;
