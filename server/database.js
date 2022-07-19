// const { createPool } = require("mysql");

// const express = require("express");

// const port = 3000;

// app.get("/", (req, res) => {
//   res.json({ message: "Hello World!" });
// });

// const app = express().listen(3200, () => {
//   console.log(`server is running at ${port}`);
// });

// const pool = createPool({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "phptest",
//   connectionLimit: "10",
// });

// pool.query(`SELECT * FROM contact`, (err, result, fields) => {
//   if (err) {
//     return console.log(err);
//   }
//   return console.log(result);
// });


// const express = require('express')
// const app = express()
// const port = 3200

// app.get('/', (req, res) => {
//   res.json({message:"getting res"})
// })

// app.get('/test', (req, res) => {
//     res.json({message:"res here"})
//   })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })