import React from "react";
import Home from "./pages/Home";
import { Route, Routes, Navigate } from "react-router-dom";
import ChampionDetails from "./pages/morestats/ChampionDetails";
import StatistshipsWelcome from "./pages/statistships/StatistshipsWelcome";
import MorestatsWelcome from "./pages/morestats/MorestatsWelcome";
import PagePlayerDetails from "./pages/statistships/PagePlayerDetails";
import PageChampionDetails from "./pages/statistships/PageChampionDetails";
import PageTeamDetails from "./pages/statistships/PageTeamDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* MORESTATS */}
      <Route path="/morestats" element={<MorestatsWelcome />} />
      <Route path="/morestats/champions/:championName" element={<ChampionDetails />} />
      <Route path="/morestats/champions" element={<Navigate to="/morestats" replace />} />

      {/* STATISTSHIPS */}
      <Route path="/statistships" element={<StatistshipsWelcome />} />
      <Route path="/statistships/player" element={<PagePlayerDetails />} />
      <Route path="/statistships/team" element={<PageTeamDetails />} />
      <Route path="/statistships/champion" element={<PageChampionDetails />} />
    </Routes>
  );
}

export default App;
