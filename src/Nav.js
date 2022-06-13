import React from "react";
import { Link } from "react-router-dom";

function Nav({ dogs }) {
  return (
    <ul>
      <li>
        <Link to="/dogs">Home</Link>
      </li>
      {dogs.map(dog => (
        <li key={dog.name}>
          <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Nav;
