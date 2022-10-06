import React, { useCallback, useState } from "react";

const StarTree = () => {
  const [numInput, setNumInput] = useState("");
  const [arrStar, setArrStar] = useState([]);

  const getStarTree = useCallback(() => {
    const newNumInput = Number(numInput);
    if (newNumInput <= 0) {
      alert("Masukan angka!");
      return;
    }

    const arrTemp = [];

    for (let i = 0; i < newNumInput; i++) {
      const star = Array(i + 1)
        .fill()
        .map(() => "*")
        .join("");
      arrTemp.push(star);
    }

    setArrStar(arrTemp);
  }, [numInput]);
  return (
    <div>
      <h3>3. Deret bintang</h3>
      <input
        type="number"
        placeholder="masukan angka"
        value={numInput}
        onChange={(e) => setNumInput(e.target.value)}
      />
      <button onClick={getStarTree}>Generate</button>
      {arrStar.length !== 0 && (
        <p>
          {arrStar.map((item, idx) => (
            <span key={idx}>
              {item} <br />
            </span>
          ))}
        </p>
      )}
    </div>
  );
};

export default StarTree;
