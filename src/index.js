// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [Honda, Tesla] = cars;
console.log(Honda.coloursByPopularity);
//when destructuring objects, the names given must be the names used
//arrays are a lot more flexible, in which anything can be used to name them.

const [Black, Silver] = Honda.coloursByPopularity;
const [Red, White] = Tesla.coloursByPopularity;
const {
  topSpeed: HondaTopSpeed,
  zeroToSixty: HondaZeroToSixty
} = Honda.speedStats;

// const {
//   topSpeed = "HondaTopSpeed",
//   zeroToSixty = "HondaZeroToSixty"
// } = Honda.speedStats;

//the above is what is called default values.
// i.e. a case that there is no particularly set value for the one in question, one can set it in ones code.

// const {topSpeed, zeroToSixty, TeslaZeroToSixty: {x, y} } = Tesla.speedStats;

//the above is super way of ndestructuring nested objects that have objects in them.
const {
  topSpeed: HondaTopSpeed,
  zeroToSixty: HondaZeroToSixty
} = Honda.speedStats;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{Tesla.model}</td>
      <td>{TeslaTopSpeed}</td>
      <td>{Red}</td>
    </tr>
    <tr>
      <td>{Honda.model}</td>
      <td>{HondaTopSpeed}</td>
      <td>{Black}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
