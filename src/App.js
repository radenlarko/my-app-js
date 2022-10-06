import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Main, NotFound, PseudoCode } from "./page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="main" element={<Main />} />
        <Route path="pseudo-code" element={<PseudoCode />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
