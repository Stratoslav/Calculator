import React, { useState } from "react";

export const Numbers = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const options = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (options.includes(value) && calc === "") ||
      (options.includes(value) && options.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
    if (!options.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const createDigits = () => {
    let numbers = [];
    for (let i = 1; i <= 9; i += 1) {
      numbers.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return numbers;
  };
  const calculate = () => {
    setCalc(eval(calc).toString());
  };
  const deleteLast = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };
  return (
    <div className="calculator">
      <div className="display">
        <span>({result ? result : ""})</span> {calc || "0"}
      </div>
      <div className="operators">
        <button onClick={() => updateCalc("/")}>/</button>
        <button onClick={() => updateCalc("*")}>*</button>
        <button onClick={() => updateCalc("+")}>+</button>
        <button onClick={() => updateCalc("-")}>-</button>
        <button onClick={deleteLast}>DEL</button>
      </div>
      <div className="digits">
        {createDigits()}
        <button onClick={() => updateCalc("0")}>0</button>
        <button onClick={() => updateCalc(".")}>.</button>
        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
};
