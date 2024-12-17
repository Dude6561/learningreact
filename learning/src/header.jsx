import React from "react";

export default function Header(props) {
  return (
    <div className="student">
      <header>
        <nav>
          <p>Name:{props.Fruits}</p>
          <p1>Price: {props.Paisa} </p1>
        </nav>
        <hr />
      </header>
    </div>
  );
}
