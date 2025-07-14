import React from "react";
import { Container, Typography } from "@mui/material";
import ChampionTable from "../../components/ChampionTable";
import HomeButton from "../../components/HomeButton";
import NavBar from "../../components/NavBar";


const PageTeamDetails: React.FC = () => {
  const buttons: [string, () => void][] = [
    ["Players", () => (window.location.href = "/statistships/player")],
    ["Teams", () => (window.location.href = "/statistships/team")],
    ["Champions", () => (window.location.href = "/statistships/champion")],
  ];
  return (
    <div className="statistships-welcome-root">
      <div className="statistships-welcome-header">
        <HomeButton />
        <NavBar buttons={buttons} />
      </div>
      <h1>Statistships Project</h1>
    </div>
  );
};

export default PageTeamDetails;
