import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DogDetails = ({dogs}) => {
  const INITIAL_STATE= {
    name: "",
    src: "",
    age: "",
    facts: []
  }
  const { name } = useParams()
  const [dogRes, setDogRes] = useState(INITIAL_STATE)
  
  console.log(dogRes)

  useEffect(function getDogResult() {
    console.log("in use effect")
    function getDog (name) {
      const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1)
      const dogIdx = dogs.findIndex(dog => dog.name === capitalizedName)
      setDogRes(dogs[dogIdx])
    }
    getDog(name)
  }, [name, dogs])

  return (
  <div>
    <img src={dogRes.src} alt={dogRes.name}></img>
    <h4>Name: {dogRes.name}</h4>
    <h5>Age: {dogRes.age}</h5>
    <h5>Facts:</h5>
    <ul>
      {dogRes.facts.map(fact => (
        <li>{fact}</li>
      ))}
    </ul>
  </div>
)}

export default DogDetails