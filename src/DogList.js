import React from "react";
import {Link} from "react-router-dom"

const DogList = ({dogs}) => {
  return (
    <div>
      <h1>Dog List</h1>
      <ul>
        {dogs.map(dog => (
          <li><Link to={`/dogs/${dog.name}`}>{dog.name}</Link></li>
        ))}
      </ul>
    </div>
  )
}

export default DogList