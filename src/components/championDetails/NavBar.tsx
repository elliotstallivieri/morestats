import React from "react";
import { Button, Grid } from "@mui/material";

const NavBar: React.FC = () => {
  const labels = ["Overview", "Items", "Masteries", "Sums", "Spells", "Stats"];
  return (
    <Grid container spacing={1} sx={{ mb: 2 }}>
      {labels.map((label) => (
        <Grid item key={label}>
          <Button variant="text">{label}</Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default NavBar;
