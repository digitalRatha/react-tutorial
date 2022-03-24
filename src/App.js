import { useState } from "react";
import "./App.css";
import Collapse from "./Collapse";
import Condition from "./Condition";
import Contact from "./Contact";
import Effect from "./Effect";
import Listing from "./Listing";
import ListingJson from "./ListingJson";

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
      {/* <Condition></Condition> */}
      {/* <Listing></Listing> */}
      {/* <ListingJson></ListingJson> */}
    <Effect/>
    </div>
  );
}

export default App;
