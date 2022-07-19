const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "phptest",
});

con.connect((err) => {
  if (err) {
    console.log("error in connection");
  }
});

module.exports = con;