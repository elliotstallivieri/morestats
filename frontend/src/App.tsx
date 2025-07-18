import { Route, Routes, Navigate } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";

import Home from "./pages/Home";
import ChampionDetails from "./pages/morestats/ChampionDetails";
import StatistshipsWelcome from "./pages/statistships/public/StatistshipsWelcome";
import MorestatsWelcome from "./pages/morestats/MorestatsWelcome";
import PagePlayerDetails from "./pages/statistships/public/PagePlayerDetails";
import PageChampionDetails from "./pages/statistships/public/PageChampionDetails";
import PageTeamDetails from "./pages/statistships/public/PageTeamDetails";
import CompetitionList from "./pages/statistships/admin/competition/CompetitionList";
import CompetitionCreate from "./pages/statistships/admin/competition/CompetitionCreate";
import PageAdminCompetitionUpdate from "./pages/statistships/admin/competition/CompetitionUpdate";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
        {/* MORESTATS */}
        <Route path="/morestats" element={<MorestatsWelcome />} />
        <Route
          path="/morestats/champions/:championName"
          element={<ChampionDetails />}
        />
        <Route
          path="/morestats/champions"
          element={<Navigate to="/morestats" replace />}
        />

      {/* STATISTSHIPS */}
      {/* PUBLIC ROUTES */}
      <Route path="/" element={<PublicLayout />}>
        <Route path="/statistships" element={<StatistshipsWelcome />} />
        <Route path="/statistships/player" element={<PagePlayerDetails />} />
        <Route path="/statistships/team" element={<PageTeamDetails />} />
        <Route
          path="/statistships/champion"
          element={<PageChampionDetails />}
        />
      </Route>

      {/* ADMIN ROUTES */}
      <Route path="/statistships/admin" element={<AdminLayout />}>
        <Route path="/statistships/admin/competitions" element={<CompetitionList />} />
        <Route path="/statistships/admin/competition/create" element={<CompetitionCreate />} />
        <Route path="/statistships/admin/competition/:id/edit" element={<PageAdminCompetitionUpdate />} />
      </Route>
    </Routes>
  );
}

export default App;
