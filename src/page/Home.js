import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        backgroundColor: "gray",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Link to={"main"}>
          <button style={{ fontSize: 16, padding: 6, marginRight: 6 }}>
            Main
          </button>
        </Link>
        <Link to={"pseudo-code"}>
          <button style={{ fontSize: 16, padding: 6 }}>Pseudo Code</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
