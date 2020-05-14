import React from "react";

function color(props) {
  return (
    <>
      <button
        className="ui button"
        style={{ backgroundColor: "blue" }}
        onClick={(e) => {
          props.changeColor("blue");
        }}
      >
        Blue
      </button>
      <button
        className="ui button"
        style={{ backgroundColor: "red" }}
        onClick={(e) => {
          props.changeColor("red");
        }}
      >
        Red
      </button>
      <button
        className="ui button"
        style={{ backgroundColor: "green" }}
        onClick={(e) => {
          props.changeColor("green");
        }}
      >
        Green
      </button>
    </>
  );
}

export default color;
