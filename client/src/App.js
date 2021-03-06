import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [Age, setAge] = useState(0);
  const [studentList, setStudentList] = useState([]);
  
  const [newAge,setNewAge] = useState (0)
  const addStudent = () => {
    console.log(firstName);

    axios
      .post(`http://localhost:4000/create`, {
        firstName: firstName,
        lastName: lastName,
        Age: Age,
      })
      .then(() => {
        console.log("YEAH BB!");
      });
  };

  const getStudent = () => {
    axios.get("http://localhost:4000/student").then((response) => {
      setStudentList(response.data);
    });
  };
 const upStudentAge = () => {
     axios.put("http://localhost:4000/up",{Age:newAge,id:id}).then((response)=>{
      alert("age is just a number")
     })
 }
  return (
    <>
      <div className="App">
        <div className="info">
          <label>firstName</label>
          <input
            type={"text"}
            onChange={(e) => {
              setfirstName(e.target.value);
            }}
          />
          <label>lastName</label>
          <input
            type={"text"}
            onChange={(e) => {
              setlastName(e.target.value);
            }}
          />
          <label>Age</label>
          <input
            type={"number"}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <button onClick={addStudent}>Add students</button>
        </div>
      </div>
      <div className="show">
        <button onClick={getStudent}>Show student</button>
        {studentList.map((val, key) => {
          return (
            <div key={key} className="student">
              <div>
              <h3> firstName:{val.firstName}</h3>
              <h3>lastName:{val.lastName}</h3>
              <h3>Age:{val.Age}</h3>
              </div>
              <div>
                <input type={"text"} placeholder="...."
                onChange={(e) => {
                  setNewAge(e.target.value);
                }}
                />
                <button
                  onClick={() => {
                    upStudentAge(val.id);
                  }}
                >
                  {" "}
                  Update
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
