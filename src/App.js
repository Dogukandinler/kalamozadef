import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMenu from "./MainMenu";
import OpenScreen from "./OpenScreen";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<OpenScreen/>} />
      <Route path="/:p_id" element={<MainMenu/>} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;
