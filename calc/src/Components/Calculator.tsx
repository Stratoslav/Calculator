import React, { useState } from "react";

export const Calculator = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const options: string[] = ["/", "*", "+", "-", "."];

  const updateCalc = (value: string) => {
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
  const deleteAll = () => {
    setCalc("");
    setResult("0");
  };
  return (
    <div className="calculator">
      <div className="display">
        {calc || "0"} <br />
        <span className="result">({result ? result : ""})</span>
      </div>
      <div>
        <button className="delAll" onClick={deleteAll}>
          C
        </button>

        <button className="del" onClick={deleteLast}>
          DEL
        </button>
      </div>

      <div className="calculator__wrap">
        <div className="digits">
          {createDigits()}

          <button onClick={() => updateCalc("0")}>0</button>
          <button onClick={() => updateCalc(".")}>.</button>
          <button onClick={calculate}>=</button>
        </div>
        <div className="operators">
          <button onClick={() => updateCalc("/")}>/</button>
          <button onClick={() => updateCalc("*")}>*</button>
          <button onClick={() => updateCalc("+")}>+</button>
          <button onClick={() => updateCalc("-")}>-</button>
        </div>
      </div>
    </div>
  );
};
