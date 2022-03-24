import React, { useState, useEffect } from "react";
import { GET, POST } from "../fetch";

const Jokes = ({ server_url }) => {
  const [jokes, setJokes] = useState("");

  useEffect(() => {
    GET(server_url).then((res) => setJokes(res));
  }, []);

  return (
    <ul className="Jokes">
      {jokes &&
        jokes.map((item, id) => {
          let newDate = new Date();
          let month = newDate.getUTCMonth() + 1;
          let day = newDate.getUTCDate();
          let year = newDate.getUTCFullYear();

          let jokeCreatedAt = `${year}/${month}/${day}`;

          return (
            <li className="Joke" key={id}>
              <p className="Value">{item.value}</p>

              <p className="Date">Created At: {jokeCreatedAt}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default Jokes;
