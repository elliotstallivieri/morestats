import React from "react";
import { Box } from "@mui/material";
import { Rune, RuneFamily } from "../../../types/Rune";

interface RuneRowProps {
  selectedRuneId: number;
  row: Rune[];
  isKeystone: boolean;
}
const RuneRow: React.FC<RuneRowProps> = ({
  selectedRuneId,
  row,
  isKeystone,
}) => {
  const baseURL =
    row[0].runeFamily === RuneFamily.StatMods
      ? "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/perk-images/statmods/"
      : "https://ddragon.leagueoflegends.com/cdn/img/";

  return (
    <Box>
      <Box
        display={"flex"}
        flexDirection="row"
        gap={2}
        justifyContent={"space-evenly"}
        mb={row[0].runeFamily === RuneFamily.StatMods ? "0" : "7%"}
        pt={row[0].runeFamily === RuneFamily.StatMods ? "0" : "2%"}
      >
        {row.map((rune) => (
          <Box
            component="img"
            src={baseURL + rune.icon}
            alt={baseURL + rune.icon}
            sx={{
              width:
                row[0].runeFamily === RuneFamily.StatMods
                  ? "10"
                  : isKeystone
                  ? row.length === 3
                    ? "25%"
                    : "20%"
                  : "12%",
              filter: selectedRuneId === rune.id ? "none" : "grayscale(1)",
              opacity: selectedRuneId === rune.id ? 1 : 0.3,
              color: "#F0E6D2",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default RuneRow;
