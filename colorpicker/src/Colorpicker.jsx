import React, {useState} from "react";

function Colorpicker(){

  const [color, setColor] = useState("#FFFFFF"); // creating a stateful variable color using array destructuring and useState to have a default color of hex code #FFFFFF and the setColor to set the value of the color variable.

  function changeColor(e){
    setColor(e.target.value);
  }

  return(
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div className="color-display" style={{backgroundColor: color} /* for any CSS within JavaScript, you'll need to enclose it within an object {} */}>
        <p> Selected Color: {color}</p>
      </div>
      <label>Select a Color: </label>
      <input type="color" value={color} onChange={changeColor}/>
    </div>
  )
}

export default Colorpicker