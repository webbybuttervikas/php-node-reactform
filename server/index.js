const express = require("express");
const app = express("app");
var cors = require('cors');
app.use(cors());
app.use(express.json())

const con = require("./databa")
app.get("/", (req, res) => {

  con.query("select * from contact", (err, result)=>{
    if(err){
        res.send("error")
    }else{
        res.send(result)
    }
  });
});

app.post("/",(req,res)=>{
    const data = req.body;
    con.query('INSERT INTO contact SET ?', data, (error,result,fields)=>{
        if(error)error;
        res.send(result)
    })
})

app.listen(5000, () => {
  console.log("server is running");
});
