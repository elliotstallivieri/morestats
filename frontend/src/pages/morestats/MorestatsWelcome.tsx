import React from "react";
import { Container, Typography } from "@mui/material";
import ChampionTable from "../../components/ChampionTable";
import HomeButton from "../../components/HomeButton";

// this will need a graphic update

const MorestatsWelcome: React.FC = () => {
  return (
    <Container maxWidth="lg" style={{ textAlign: "center", marginTop: "20px" }}>
      <div style={{ display: "flex", justifyContent: "start", alignItems: "center", marginBottom: "20px" }}>
        <HomeButton />
        <Typography variant="h4" color="primary" gutterBottom style={{ width: "80%" }}>
          Morestats Project
        </Typography>
      </div>
      <ChampionTable />
    </Container>
  );
};

export default MorestatsWelcome;
