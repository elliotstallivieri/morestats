import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import ChampionDetails from "./pages/ChampionDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/champions/:championName" element={<ChampionDetails />} />
    </Routes>
  );
}

export default App;
