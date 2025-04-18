import React from "react";
import { Box, Typography } from "@mui/material";
import RuneRow from "./RuneRow";
import { toRuneFormat } from "../../../utils/RuneFormatter";

interface StatModsProps {
  selectedRuneId: number[];
}

const Runes: React.FC<StatModsProps> = ({ selectedRuneId }) => {
  // THIS IS A TEMPORARY SOLUTION
  // a cleaner but still not perfect solution would be to create a new json file with the stat mods
  const runeList = [
    [
      toRuneFormat(
        5008,
        "StatModsAdaptiveForceIcon.png".toLowerCase(),
        "adap",
        0,
        "StatMods"
      ),
      toRuneFormat(
        5007,
        "StatModsCDRScalingIcon.png".toLowerCase(),
        "CDR",
        0,
        "StatMods"
      ),
      toRuneFormat(
        5005,
        "StatModsAttackSpeedIcon.png".toLowerCase(),
        "AS",
        0,
        "StatMods"
      ),
    ],
    [
      toRuneFormat(
        5008,
        "StatModsAdaptiveForceIcon.png".toLowerCase(),
        "adap",
        0,
        "StatMods"
      ),
      toRuneFormat(
        5007,
        "statmodsmovementspeedicon.png".toLowerCase(),
        "CDR",
        0,
        "StatMods"
      ),
      toRuneFormat(
        5005,
        "statmodshealthplusicon.png".toLowerCase(),
        "AS",
        0,
        "StatMods"
      ),
    ],
    [
      toRuneFormat(
        5011,
        "statmodshealthscalingicon.png".toLowerCase(),
        "adap",
        0,
        "StatMods"
      ),
      toRuneFormat(
        5007,
        "statmodstenacityicon.png".toLowerCase(),
        "CDR",
        0,
        "StatMods"
      ),
      toRuneFormat(
        5005,
        "statmodshealthplusicon.png".toLowerCase(),
        "AS",
        0,
        "StatMods"
      ),
    ],
  ];

  return (
    <Box>
      {runeList.map((rune, index) => (
        <RuneRow
          key={rune[0].id}
          selectedRuneId={selectedRuneId[index]}
          row={rune}
          isKeystone={false}
        />
      ))}
    </Box>
  );
};

export default Runes;

/*
3 lignes : offense, flex, def
3 slots par ligne
=> faire une map de 3x3 avec juste les icones pour l'instant
=> appeler cette map avec un .map
  console.log(
    "TEST ICI",
    statmodo.filter((element) => element.id < 7000)
  );
*/
