import { useState } from "react";
import "./App.css";
import Condition from "./Condition";
import Contact from "./Contact";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App mt-3">
      {/* <button
        className="btn-sm btn btn-primary my-3 mx-3"
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        -
      </button>
      <h1>{count}</h1>
      <button
        className="btn-sm btn btn-primary my-3 mx-3"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button> */}
      <Condition></Condition>
    </div>
  );
}

export default App;
