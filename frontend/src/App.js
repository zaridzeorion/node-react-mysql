import React from "react";
import AddJoke from "./components/AddJoke";
import Jokes from "./components/Jokes";

function App() {
  return (
    <div className="App">
      <h1>Chuck Norris Jokes</h1>

      <AddJoke />
      <Jokes />
    </div>
  );
}

export default App;
