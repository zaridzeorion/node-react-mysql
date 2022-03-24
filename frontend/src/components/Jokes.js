import React, { useState, useEffect } from "react";
import { GET, POST } from "../fetch";

const Jokes = ({ server_url }) => {
  const [loading, setLoading] = useState(true);
  const [jokes, setJokes] = useState("");

  useEffect(() => {
    GET(server_url).then((res) => {
      setJokes(res);
      setLoading(false);
    });
  }, []);

  const handleRemove = (e, id) => {
    document.getElementById(`Joke${id}`).classList.toggle("Removed");
  };

  return (
    <ul className="Jokes">
      {loading && "Loading..."}

      {jokes &&
        jokes.map((item, id) => {
          let newDate = new Date();
          let month = newDate.getUTCMonth() + 1;
          let day = newDate.getUTCDate();
          let year = newDate.getUTCFullYear();

          let jokeCreatedAt = `${year}/${month}/${day}`;

          return (
            <li id={`Joke${id}`} className={`Joke`} key={id}>
              <p className="Value">{item.value}</p>

              <p className="Date">Created At: {jokeCreatedAt}</p>

              <p onClick={(e) => handleRemove(e, id)} className={`RemoveJoke`}>
                Joke
              </p>
            </li>
          );
        })}
    </ul>
  );
};

export default Jokes;
