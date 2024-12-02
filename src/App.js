import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Subjects from "./pages/Subjects";
import Students from "./pages/Students";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/student" element={<Students />} />
      <Route path="/subject" element={<Subjects />} />
    </Routes>
  );
};

export default App;
