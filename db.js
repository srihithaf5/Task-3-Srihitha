const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "srihitha@1659",
  database: "studentdb"
});

connection.connect((err) => {
  if (err) {
    console.log("Database Error:", err);
    return;
  }

  console.log("MySQL Connected Successfully");
});

module.exports = connection;