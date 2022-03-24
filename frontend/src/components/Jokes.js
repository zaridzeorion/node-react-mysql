import React, {useState, useEffect} from "react";
import { GET } from "../fetch";

const Jokes = ({ server_url }) => {
  const [jokes, setJokes] = useState('')

  useEffect(() => {
    GET(server_url).then((res) => setJokes(res))
  }, [])
  
  return (
    <ul>
      {jokes &&
        jokes.map((item, id) => (
          <li key={id}>
            <p>{item.value}</p> 
            
            ({item.id}) : ({item.date})
          </li>
        ))}
    </ul>
  );
};

export default Jokes;
