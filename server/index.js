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
app.put("/update", (req, res) => {
  const id = req.body.id;
  const Age= req.body.Age;
  db.query(
    "UPDATE student SET wage = ? WHERE id = ?",
    [Age, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM student WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(4000, () => {
  console.log("run run run on port 4000");
});