import React, { useState } from "react";
import { Numbers } from "./Numbers";

export const AddSum = () => {
  let [number, setNumber] = useState(0);

  const add = (...sum) => {
    sum.map((s) => setNumber((prev) => prev + s));
  };

  console.log();

  return (
    <>
      <button onClick={() => add(4, 7, 8, 8)}>+</button>
      <h1>{number}</h1>;
      <Numbers />
    </>
  );
};
