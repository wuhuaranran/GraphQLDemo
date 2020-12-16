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

async function addCourses({ course, score, userId }) {
  let querysql = `INSERT INTO course(course, score, userId) VALUES("${course}",${score},${userId})`;
  return new Promise((resolve, reject) => {
    connection.query(querysql, function (err, result) {
      if (err) reject({ status: "fail", message: err });
      resolve({ status: "success", message: "创建成功" });
    });
  });
}

async function deleteCourses(id) {
  let querysql = `DELETE from course where id = ${id}`;
  return new Promise((resolve, reject) => {
    connection.query(querysql, function (err, result) {
      if (err) reject({ status: "fail", message: err });
      resolve({ status: "success", message: "删除成功" });
    });
  });
}

module.exports = { getCourses, addCourses, deleteCourses };
