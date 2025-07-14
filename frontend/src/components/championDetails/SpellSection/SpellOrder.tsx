import React from "react";
import { Box } from "@mui/material";
import SpellRow from "./SpellRow";
import { Spell } from "../../../types/Spell";

interface SpellOrderProps {
  championName: string;
  spells: Spell[];
}

const SpellOrder: React.FC<SpellOrderProps> = ({ championName, spells }) => {
  return (
    <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
      <SpellRow
        spell={spells[0]}
        championName={championName}
        levels={[1, 5, 7, 8, 9]}
      />
      <SpellRow
        spell={spells[1]}
        championName={championName}
        levels={[2, 3, 10, 12, 13]}
      />
      <SpellRow
        spell={spells[2]}
        championName={championName}
        levels={[4, 14, 15, 17, 18]}
      />
      <SpellRow
        spell={spells[3]}
        championName={championName}
        levels={[6, 11, 16]}
      />
    </Box>
  );
};

export default SpellOrder;
