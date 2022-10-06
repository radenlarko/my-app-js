import React, { useCallback, useState } from "react";

const Fibonacci = () => {
  const [numInput, setNumInput] = useState("");
  const [arrFib, setArrFib] = useState([]);

  const getFibonacci = useCallback(() => {
    const newNumInput = Number(numInput);

    if (newNumInput <= 0) {
      alert("Masukan angka positif");
      return;
    }

    function getNum(num) {
      if (num < 2) {
        return num;
      } else {
        return getNum(num - 1) + getNum(num - 2);
      }
    }

    const arrTemp = [];

    for (let i = 0; i < newNumInput; i++) {
      arrTemp.push(getNum(i));
    }

    setArrFib(arrTemp);
  }, [numInput]);

  return (
    <div>
      <h3>2. Deret bilangan Fibonacci</h3>
      <input
        type="number"
        placeholder="masukan angka"
        value={numInput}
        onChange={(e) => setNumInput(e.target.value)}
      />
      <button onClick={getFibonacci}>Generate</button>
      {arrFib.length !== 0 && <p>{arrFib.join(" ")}</p>}
    </div>
  );
};

export default Fibonacci;
