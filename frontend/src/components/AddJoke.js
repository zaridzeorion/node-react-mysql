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
        setStatus("Joke already added!");
      }
    });

    setStatus("Joke added! Reloading...");

    setTimeout(() => {
      window.location.reload();
    }, 800);
  };

  return (
    <>
      {status} <br />
      <button className="addJokeButton" onClick={() => handleSubmit()}>
        Add Joke
      </button>
    </>
  );
};

export default Jokes;
