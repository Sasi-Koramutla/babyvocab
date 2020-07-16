import React from "react";
import ReactDOM from "react-dom";

var style = {
  backgroundColor: "orange",
  color:"white",
  fontFamily: "Arial"
};

/* const title = React.createElement(
  "h1",
  {id: "title", className: "header", style:style},
  "Hello World"
); */

ReactDOM.render(
  <div style={style}>
    <h1 id="heading-element">Hello World!</h1>
    <p>Glad you are here!</p>
  </div>,
  document.getElementById("root")
);