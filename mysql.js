var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root1234",
  database: "graphqlTest",
});

connection.connect();

async function getCourses(id) {
  let querysql = "SELECT * from course ";
  if (id) querysql += `where id = ${id}`;
  return new Promise((resolve, reject) => {
    connection.query(querysql, function (err, result) {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
}

module.exports = { getCourses };
