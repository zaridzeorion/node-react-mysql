import React, { useState, useEffect } from "react";
import { GET, POST } from "../fetch";

const Jokes = ({ server_url }) => {
  const [joke, setJoke] = useState("");

  // Retreive joke
  const api_url = "https://api.chucknorris.io/jokes/random";

  useEffect(() => {
    GET(api_url).then((res) => setJoke(res));
  }, []);

  // Post joke
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(joke),
  };

  const handleSubmit = async () => POST(server_url, options);

  return <input type="submit" onClick={() => handleSubmit()} value="Add Joke" />;
};

export default Jokes;
