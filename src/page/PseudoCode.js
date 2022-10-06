import React from "react";
import AngkaTerbilang from "../component/pseudoCode/AngkaTerbilang";
import DeretAngka from "../component/pseudoCode/DeretAngka";
import Fibonacci from "../component/pseudoCode/Fibonacci";
import StarTree from "../component/pseudoCode/StarTree";

const PseudoCode = () => {
  return (
    <div style={{ maxWidth: 1024, margin: "auto", padding: 10 }}>
      <div>
        <h1>Pseudo Code</h1>
        <hr />
        <DeretAngka />
        <hr />
        <Fibonacci />
        <hr />
        <StarTree />
        <hr />
        <AngkaTerbilang />
      </div>
    </div>
  );
};

export default PseudoCode;
