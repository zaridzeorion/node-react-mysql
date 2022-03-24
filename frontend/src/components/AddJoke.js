import React, { useState, useEffect } from "react";
import { GET, POST } from "../fetch";

const Jokes = ({ server_url }) => {
  const [status, setStatus] = useState("");
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

  const handleSubmit = async () => {
    POST(server_url, options).then((res) => {
      if (res.ok) {
        setStatus("Joke already added! Reloading...");
      }
    });

    setTimeout(() => {
      setStatus("Joke added! Reloading...");
      window.location.reload();
    }, 1000);
  };

  return (
    <>
      {status} <br />
      <input type="submit" onClick={() => handleSubmit()} value="Add Joke" />
    </>
  );
};

export default Jokes;
