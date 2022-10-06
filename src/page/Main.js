import React from "react";
import JsonManipulasi from "../component/main/JsonManipulasi";
import JsonManipulasiRemote from "../component/main/JsonManipulasiRemote";

const Main = () => {
  return (
    <div style={{ maxWidth: 1024, margin: "auto", padding: 10 }}>
      <div>
        <h1>Main</h1>
        <hr />
        <JsonManipulasi />
        <hr />
        <JsonManipulasiRemote />
      </div>
    </div>
  );
};

export default Main;
