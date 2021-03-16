const mysql = require('mysql');

const connection = mysql.createPool({
  host: 'eu-cdbr-west-03.cleardb.net',
  user: 'b52cf1402af19f',
  password: '6b9f3f64',
  database: 'heroku_fbea7b28fe5161e',
  port: 3306,
});

exports.getBooks = async (req, res) => {
  // eslint-disable-next-line no-shadow
  connection.getConnection(function (_err, connection) {
    connection.query('SELECT * FROM books', function (error, results) {
      if (error) {
        throw error;
      }
      res.send(results);
    });
  });
};

exports.createBook = (req, res) => {
  connection.query(
    `INSERT INTO books (
      name, 
      description, 
      createdAt, 
      originalName, 
      author, 
      genres, 
      firstEdition, 
      numberOfPages, 
      startReadDate,
      endReadDate,
      evaluation,
      publishHouse)
      VALUES ("${req.body.name}",
      "${req.body.description}", 
      "${new Date()}", 
      "${req.body.originalName}", 
      "${req.body.author}", 
      "${req.body.genres}", 
      "${req.body.firstEdition}", 
      "${req.body.numberOfPages}", 
      "${req.body.startReadDate}", 
      "${req.body.endReadDate}", 
      "${req.body.evaluation}",
      "${req.body.publishHouse}" )`,
    function (error) {
      if (error) {
        return res.send(console.log(error));
      }
      return res.json({message: 'Book was created'});
    },
  );
};

exports.deleteBook = (req, res) => {
  connection.getConnection(function (_err) {
    connection.query(
      `DELETE FROM books where id="${req.params.id}"`,
      function (error, results) {
        if (error) {
          throw error;
        }
        res.send(results);
      },
    );
  });
};
