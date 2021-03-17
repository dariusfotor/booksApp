const express = require('express');
const router = express.Router();
const {
  getBooks,
  createBook,
  deleteBook,
} = require('../controller/booksListController');
const {
  getBookById,
  updateBook,
  updateBookEndReadDate,
} = require('../controller/bookIdController');

router.get('/books', getBooks);
router.delete('/books/:id', deleteBook);
router.get('/books/:id', getBookById);
router.post('/createBook', createBook);
router.patch('/book-update/:id', updateBook);
router.patch('/book-update-end-read-date/:id', updateBookEndReadDate);

module.exports = router;
