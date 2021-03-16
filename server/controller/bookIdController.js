const mysql = require('mysql');

const connection = mysql.createPool({
  host: 'eu-cdbr-west-03.cleardb.net',
  user: 'b52cf1402af19f',
  password: '6b9f3f64',
  database: 'heroku_fbea7b28fe5161e',
  port: 3306,
});

exports.getBookById = async (req, res) => {
  // eslint-disable-next-line no-shadow
  connection.getConnection(function (_err, connection) {
    connection.query(
      `SELECT * FROM books where id= "${req.params.id}"`,
      function (error, results) {
        if (error) {
          throw error;
        }
        res.send(results);
      },
    );
  });
};

exports.updateBook = async (req, res) => {
  // eslint-disable-next-line no-shadow
  connection.getConnection(function (_err) {
    connection.query(
      `UPDATE books SET name="${req.body.name}",
       description="${req.body.description}",
       originalName="${req.body.originalName}",
       author="${req.body.author}",
       genres="${req.body.genres}",
       firstEdition="${req.body.firstEdition}",
       numberOfPages="${req.body.numberOfPages}",
       startReadDate="${req.body.startReadDate}",
       endReadDate="${req.body.endReadDate}",
       evaluation="${req.body.evaluation}",
       publishHouse="${req.body.publishHouse}",
       updatedAt="${new Date()}"
        where id= "${req.params.id}"`,
      function (error, results) {
        if (error) {
          throw error;
        }
        res.send(results);
      },
    );
  });
};
