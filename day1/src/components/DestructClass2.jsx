import React from "react";

const DestructClass2 = (props) => {
  const { name, brand, model, boys } = props;

  const [boy1, boy2, boy3] = boys;

  return (
    <div>
      cars
      <h1>{name}</h1>
      <h1>{model}</h1>
      <h1>{brand}</h1>
      <h1>boys1 is {boy1}</h1>
      <h1>boys2 is {boy2}</h1>
    </div>
  );
};

export default DestructClass2;
// https://0mq7grq7-5174.asse.devtunnels.ms/
