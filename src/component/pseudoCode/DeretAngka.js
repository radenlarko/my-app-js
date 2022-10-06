import React, { useCallback, useEffect, useState } from "react";

const DeretAngka = () => {
  const [deretArr, setDeretArr] = useState([]);
  const [generatedArr, setGeneratedArr] = useState([]);

  const generateDeret = useCallback(() => {
    const mapArr = deretArr.map((item) => {
      if (item <= 60) {
        return {
          value: item,
          label: `${item} KURANG`,
        };
      }

      if (item > 60 && item <= 70) {
        return {
          value: item,
          label: `${item} CUKUP`,
        };
      }

      if (item > 70 && item <= 80) {
        return {
          value: item,
          label: `${item} BAIK`,
        };
      }

      if (item > 80) {
        return {
          value: item,
          label: `${item} LUAR BIASA`,
        };
      }

      return {
        value: item,
        label: `${item} DEFAULT`,
      };
    });

    setGeneratedArr(mapArr);
  }, [deretArr]);

  useEffect(() => {
    const getDeretAngka = () => {
      const initial = [];

      for (let i = 50; i <= 100; i += 5) {
        initial.push(i);
      }

      setDeretArr(initial);
    };

    getDeretAngka();
  }, []);

  return (
    <div>
      <h3>1. Deret angka berkelipatan 5</h3>
      <p>Data = {`[${deretArr.join(", ")}]`}</p>
      <button onClick={generateDeret}>Generate Deret</button>
      {generatedArr.length !== 0 && (
        <ul>
          {generatedArr.map((item) => (
            <li key={item.value}>{item.label}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DeretAngka;
