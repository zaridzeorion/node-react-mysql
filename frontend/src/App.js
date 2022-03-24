import React from "react";
import AddJoke from "./components/AddJoke";
import Jokes from "./components/Jokes";

function App() {
  const server_url = "http://localhost:4000/jokes";

  return (
    <div className="App">
      <h1>Chuck Norris Jokes</h1>

      <AddJoke server_url={server_url} />
      <Jokes server_url={server_url} />
    </div>
  );
}

export default App;
