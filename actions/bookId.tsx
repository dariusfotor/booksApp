import axios from 'axios';

export const fetchById = async (setBook: any, id: number) => {
  try {
    await axios
      .get(`http://10.10.10.6:3000/books/${id}`)
      .then(response => setBook(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const updateBook = async (object: any, id?: number) => {
  try {
    await axios
      .patch(`http://10.10.10.6:3000/book-update/${id}`, object)
      .then(response => response.data);
  } catch (err) {
    console.log(err);
  }
};

export const updateBookEndReadDate = async (object: any, id?: number) => {
  try {
    await axios
      .patch(`http://10.10.10.6:3000/book-update-end-read-date/${id}`, object)
      .then(response => response.data);
  } catch (err) {
    console.log(err);
  }
};
