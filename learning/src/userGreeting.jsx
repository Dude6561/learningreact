import React from "react";
import { use } from "react";
import { useState } from "react";
import List from "./list";

export default function UserGreeting(props) {
  const [name, setName] = useState("Guest");
  const [katijana, setKatijana] = useState("0");
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handlekatijana(e) {
    setKatijana(e.target.value);
  }
  return (
    <div>
      <input value={name} onChange={handleNameChange} /> <br />
      <p>Kati Jana Chan </p>
      <select value={katijana} onChange={handlekatijana}>
        <option>0</option>
        <option>1</option>
        <option>2</option>
      </select>
      <p>Name :{name}</p>
      <p>Total:{katijana}</p>
    </div>
  );
}
