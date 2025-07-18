import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" style={{ textAlign: "center", marginTop: "20px" }}>
      <Typography variant="h4" color="primary" gutterBottom>
        LoL Stats Project
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 20 }}>
        <button
          className="site-selector-btn"
          onClick={() => navigate("/morestats")}
        >
          Go to Morestats
        </button>
        <button
          className="site-selector-btn"
          onClick={() => navigate("/statistships")}
        >
          Go to Statistships
        </button>
      </Box>
    </Container>
  );
};

export default Home;
