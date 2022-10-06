import React from "react";
import AuthPage from "../component/main/AuthPage";
import HashString from "../component/main/HashString";
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
        <hr />
        <HashString />
        <hr />
        <AuthPage />
      </div>
    </div>
  );
};

export default Main;
