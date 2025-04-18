// src/pages/Home.tsx
import React from "react";
import { Container, Typography } from "@mui/material";
import ChampionTable from "../components/ChampionTable"; // Assure-toi que le chemin est correct

const Home: React.FC = () => {
  return (
    <Container maxWidth="lg" style={{ textAlign: "center", marginTop: "20px" }}>
      <Typography variant="h4" color="primary" gutterBottom>
        LoL Stats Project
      </Typography>
      <ChampionTable />
    </Container>
  );
};

export default Home;
