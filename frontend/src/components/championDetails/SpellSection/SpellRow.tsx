import React from "react";
import { Box, Typography } from "@mui/material";
import { Spell } from "../../../types/Spell";

interface SpellRowProps {
  spell: Spell;
  championName: string;
  levels: number[];
}

const SpellRow: React.FC<SpellRowProps> = ({ spell, championName, levels }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        flexDirection: "row",
        alignItems: "center",
        maxWidth: "100%",
      }}
    >
      <Box
        component={"img"}
        src={spell.icon}
        sx={{ height: "2.5rem", borderRadius: "7%" }}
        alt={spell.spellKey + " spell"}
      />
      {Array.from({ length: 18 }, (_, index) => (
        <Box
          key={index}
          sx={{
            backgroundColor: "#0397AB",
            opacity: levels.indexOf(index + 1) !== -1 ? "1" : "0.1",
            minWidth: "1.5rem",
            height: "1.5rem",
            borderRadius: "5%",
          }}
        >
          <Typography
            sx={{
              color: "#F0E6D2",
              fontSize: "1rem",
              textAlign: "center",
              width: "100%",
            }}
          >
            {levels.indexOf(index + 1) !== -1 && index + 1}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default SpellRow;
