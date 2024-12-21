import React from "react";
import { useState } from "react";
export default function Colorpicker() {
  const [color, setColor] = useState();

  function handleColorchange(e) {
    setColor(e.target.value);
  }
  return (
    <div>
      <p>Color Picker</p>
      <p class="rang" style={{ backgroundColor: color }}>
        Color is : {color}
      </p>
      <div>
        <input type="color" onChange={handleColorchange} />
      </div>
    </div>
  );
}
