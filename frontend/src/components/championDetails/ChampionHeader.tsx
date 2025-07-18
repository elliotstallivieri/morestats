import React from "react";
import { Box, Typography, Select, MenuItem } from "@mui/material";

interface ChampionHeaderProps {
  name: string;
  winrate: number;
  pickrate: number;
  banrate: number;
  totalGames: number;
}

const ChampionHeader: React.FC<ChampionHeaderProps> = ({
  name,
  winrate,
  pickrate,
  banrate,
  totalGames,
}) => {
  return (
    <Box
      sx={{
        p: 1,
        backgroundColor: "#091428",
        borderRadius: "8px",
        borderColor: "#F0E6D2",
        borderWidth: "0.05rem",
        borderStyle: "solid",
        my: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        gap: "5%",
        paddingLeft: "5%",
        color: "#F0E6D2",
      }}
    >
      <Typography variant="h4" sx={{ paddingLeft: "5%" }}>
        {name.toLocaleUpperCase()}
      </Typography>
      <Select
        defaultValue="challenger"
        size="small"
        sx={{
          color: "#F0E6D2",
          borderRadius: "4px",
          border: "1px solid #ccc",
          ".MuiSelect-icon": { color: "white" },
        }}
      >
        <MenuItem value="challenger">Challenger</MenuItem>
        <MenuItem value="gold">Gold</MenuItem>
        <MenuItem value="silver">Silver</MenuItem>
        <MenuItem value="bronze">Bronze</MenuItem>
      </Select>
      <Box sx={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Typography variant="h6">Winrate: {winrate}%</Typography>
        <Typography variant="h6">Pickrate: {pickrate}%</Typography>
        <Typography variant="h6">Banrate: {banrate}%</Typography>
        <Typography variant="h6">Total games: {totalGames}</Typography>
      </Box>
    </Box>
  );
};

export default ChampionHeader;
