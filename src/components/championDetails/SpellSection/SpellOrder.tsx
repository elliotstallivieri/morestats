import React from "react";
import { Box } from "@mui/material";
import SpellRow from "./SpellRow";
import { Spell, spellKey } from "../../../types/Spell";

interface SpellOrderProps {
  championName: string;
}

const SpellOrder: React.FC<SpellOrderProps> = ({ championName }) => {
  const baseURL =
    "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/" +
    championName +
    "/hud/icons2d/" +
    championName;
  let qSpell: Spell = {
    id: 0,
    name: "Command : Attack",
    icon: baseURL + "q.png",
    spellKey: spellKey.Q,
  };
  let wSpell: Spell = {
    id: 0,
    name: "Command : Dissonance",
    icon: baseURL + "w.png",
    spellKey: spellKey.W,
  };
  let eSpell: Spell = {
    id: 0,
    name: "Command : Protect",
    icon: baseURL + "e.png",
    spellKey: spellKey.E,
  };
  let rSpell: Spell = {
    id: 0,
    name: "Command : Shockwave",
    icon: baseURL + "r.png",
    spellKey: spellKey.R,
  };
  return (
    <Box sx={{ display: "flex", gap: 1, flexDirection: "column" }}>
      <SpellRow
        spell={qSpell}
        championName={championName}
        levels={[1, 5, 7, 8, 9]}
      />
      <SpellRow
        spell={wSpell}
        championName={championName}
        levels={[2, 3, 10, 12, 13]}
      />
      <SpellRow
        spell={eSpell}
        championName={championName}
        levels={[4, 14, 15, 17, 18]}
      />
      <SpellRow
        spell={rSpell}
        championName={championName}
        levels={[6, 11, 16]}
      />
    </Box>
  );
};

export default SpellOrder;
/*  
      <Box component={"img"} src={baseURL + "p.png"} />
      <Box component={"img"} src={baseURL + "q.png"} />
      <Box component={"img"} src={baseURL + "w.png"} />
      <Box component={"img"} src={baseURL + "e.png"} />
      <Box component={"img"} src={baseURL + "r.png"} />
*/
