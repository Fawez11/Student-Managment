
import "./App.css";
import { useState } from "react";

function App() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [Age, setAge] = useState(0);

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
        <input type={"number"} onChange={(e)=>{
          setAge(e.target.value)
        }} />
         <button>  
          Add students
        </button>
      </div>
    </div>
  );
}

export default App;
