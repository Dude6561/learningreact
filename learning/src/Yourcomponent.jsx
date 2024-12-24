import { useState } from "react";
import React from "react";

export default function Yourcomponent() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustand",
  });
  function handleYearChange(e) {
    setCar((c) => ({ ...c, year: e.target.value }));
  }
  function handleMakeChange(e) {
    setCar((c) => ({ ...c, make: e.target.value }));
  }
  function handleModelChange(e) {
    setCar((c) => ({ ...c, model: e.target.value }));
  }
  return (
    <div>
      <p>
        Your Favourite car is :{car.year},{car.make} {car.model}
      </p>
      <input type="Number" value={car.year} onChange={handleYearChange} />
      <br />
      <input type="text" value={car.make} onChange={handleMakeChange} /> <br />
      <input type="text" value={car.model} onChange={handleModelChange} />{" "}
      <br />
    </div>
  );
}
