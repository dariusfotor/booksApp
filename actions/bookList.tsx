import axios from 'axios';

export const fetchFunction = async (setData: any) => {
  try {
    await axios
      .get('http://10.10.10.6:3000/books')
      .then((response) => setData(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const createBook = async (object: any) => {
  try {
    await axios
      .post('http://10.10.10.6:3000/createBook', object)
      .then((response) => console.log(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const deleteBook = async (id: number) => {
  try {
    await axios
      .delete(`http://10.10.10.6:3000/books/${id}`)
      .then((response) => console.log(response.data));
  } catch (err) {
    console.log(err);
  }
};
