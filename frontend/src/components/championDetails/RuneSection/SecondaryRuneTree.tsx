import React from "react";
import { Box } from "@mui/material";
import RuneRow from "./RuneRow";
import { Rune } from "../../../types/Rune";

interface SecondaryMasteryTreeProps {
  selectedRuneIds: number[];
  rows: Rune[][];
}
const SecondaryMasteryTree: React.FC<SecondaryMasteryTreeProps> = ({
  selectedRuneIds,
  rows,
}) => {
  return (
    <Box
      sx={{
        borderRadius: "8px",
        backgroundColor: "#091428",
        //borderColor: "#F0E6D2",
        borderWidth: "0.05rem",
        borderStyle: "solid",
        p: 1,
        maxWidth: "100%",
      }}
    >
      <RuneRow
        selectedRuneId={selectedRuneIds[0]}
        row={rows[0]}
        isKeystone={false}
      />
      <RuneRow
        selectedRuneId={selectedRuneIds[1]}
        row={rows[1]}
        isKeystone={false}
      />
    </Box>
  );
};

export default SecondaryMasteryTree;
