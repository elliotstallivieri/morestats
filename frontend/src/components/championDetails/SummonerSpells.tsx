import React from "react";
import { Box } from "@mui/material";
import { SummonerSpell } from "../../types/SummonerSpell";

interface SummonerSpellsProps {
  sum1: SummonerSpell;
  sum2: SummonerSpell;
}

const SummonerSpells: React.FC<SummonerSpellsProps> = ({ sum1, sum2 }) => {
  return (
    <Box sx={{ display: "flex", gap: "1rem", flexDirection: "row" }}>
      <Box
        component={"img"}
        src={
          "https://raw.communitydragon.org/latest/plugins/rcp-be-" + sum1.icon
        }
        sx={{ height: "3rem", borderRadius: "7%" }}
      />
      <Box
        component={"img"}
        src={
          "https://raw.communitydragon.org/latest/plugins/rcp-be-" + sum2.icon
        }
        sx={{ height: "3rem", borderRadius: "7%" }}
      />
    </Box>
  );
};

export default SummonerSpells;
