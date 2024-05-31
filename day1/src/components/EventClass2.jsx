import React from "react";

const EventClass2 = (props) => {
  const meronamevandey = (name) => {
    alert("mero name " + name);
  };

  return (
    <>
      <input
        className="btn2"
        type="button"
        value="click me brother"
        onClick={() => meronamevandey(props.name)}
      />
    </>
  );
};

export default EventClass2;
