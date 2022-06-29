const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require ("cors")

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root",
  database: " managestudent",
});

app.post("./create", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const Age = req.body.Age;

  db.query(
    "INSERT INTO student (firstName,lastName,Age) VALUES (?,?,?) ",
    [firstName, lastName, Age],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("done with values");
      }
    }
  );
});
app.get("./student",(req,res)=>{
db.query ("SELECT * FROM student",(err,result) => {
    if(err){
        console.log(err);
    } else{
       res.send(result)
    }
}) 
})
app.listen(3001, () => {
  console.log("run run run on port 3001");
});