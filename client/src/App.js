import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [Age, setAge] = useState(0);
  const [studentList,setStudentList]= useState([])

  const addStudent = () => {
  
    Axios.post("http://localhost:3001/create", { 
      firstName : firstName, 
      lastName:lastName,
      Age:Age ,
      }).then(() =>{
        console.log("YEAH BB!");
      })
  };

    const getStudent = () =>{
      Axios.get("http://localhost:3001/student").then((response)=>{
        console.log(response);
      })
    }
     
  return (
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
       <div className="show">
       <button onClick={getStudent}>Show student</button>
       </div>
     
     
     
    </div>
  );
}

export default App;
