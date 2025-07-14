import React from "react";
import { Box, Button, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate, useParams } from "react-router-dom";

import { Rune } from "../../types/Rune";

import jsonRunes from "../../utils/staticData/runes.json";
import { toRunePack } from "../../utils/RuneFormatter";
import staticDataMaker from "../../utils/staticDataMaker";

import ChampionHeader from "../../components/championDetails/ChampionHeader";
import ButtonBar from "../../components/championDetails/ButtonBar";
import PrimaryRuneTree from "../../components/championDetails/RuneSection/PrimaryRuneTree";
import SecondaryMasteryTree from "../../components/championDetails/RuneSection/SecondaryRuneTree";
import StatMods from "../../components/championDetails/RuneSection/StatMods";
import SpellOrder from "../../components/championDetails/SpellSection/SpellOrder";
import SummonerSpells from "../../components/championDetails/SummonerSpells";
import ItemSection from "../../components/championDetails/ItemSection";
import HomeButton from "../../components/HomeButton";

interface RouteParams {
  [key: string]: string | undefined;
  championName: string;
}

const ChampionDetails: React.FC = () => {
  const { championName } = useParams<RouteParams>() || "Malzahar1";
  const navigate = useNavigate();
  const championData = staticDataMaker(championName || "Malzahar2");
  return (
    <Box sx={{ p: 2, backgroundColor: "#010A13", height: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <HomeButton />
        <input
          type="text"
          placeholder="Search a champion..."
          style={{
            backgroundColor: "#091428",
            color: "#F0E6D2",
            width: "40%",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginRight: "35%",
          }}
        />
      </Box>
      <ChampionHeader
        name={championName || "Garen"}
        winrate={52.4}
        pickrate={12.6}
        banrate={6.5}
        totalGames={1234}
      />
      <Box sx={{ display: "flex", gap: "16px", paddingLeft: "0%" }} id="JOHNNY">
        <Box
          sx={{
            width: "30%",
            height: "100%",
            borderRadius: "2%",
          }}
        >
          <Box
            component="img"
            src={championData.championImageUrl}
            alt={championName}
            sx={{
              width: "95%",
              height: "auto",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            width: "100%",
          }}
          id="coiffeur"
        >
          <ButtonBar name={championName || ""} />
          <Box
            sx={{
              display: "flex",
              gap: "16px",
              mb: 2,
              flexDirection: "row",
            }}
          >
            <Box
              sx={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                maxWidth: "25%",
              }}
            >
              <PrimaryRuneTree
                selectedRuneIds={championData.primaryRuneList}
                rows={
                  toRunePack(jsonRunes[championData.keyStone].key) as Rune[][]
                }
              />
              <SecondaryMasteryTree
                selectedRuneIds={championData.secondaryRuneList}
                rows={
                  [1, 2].map(
                    (i) =>
                      toRunePack(jsonRunes[championData.secondaryTree].key)[i]
                  ) as Rune[][]
                }
              />
              <Box
                sx={{
                  flex: "1",
                  backgroundColor: "#091428",
                  //border: "1px solid #ccc",
                  borderRadius: "8px",
                  p: 1,
                }}
              >
                <StatMods selectedRuneId={championData.statMods} />
              </Box>
            </Box>
            <Box
              sx={{
                gap: "5rem",
                //border: "1px solid yellow",
                borderRadius: "8px",
                p: 1,
              }}
            >
              <Box
                sx={{
                  flex: "1",
                  backgroundColor: "#091428",
                  //border: "1px solid green",
                  borderRadius: "8px",
                  p: 1,
                  mb: "1rem",
                }}
              >
                <SpellOrder
                  championName={championName?.toLowerCase() || "Malzahar3"}
                  spells={championData.spells}
                />
              </Box>
              <Box
                sx={{
                  gap: "1rem",
                  //border: "1px solid red",
                  mb: "1rem",
                  height: "5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    flex: "1",
                    backgroundColor: "#091428",
                    //border: "1px solid orange",
                    borderRadius: "8px",
                    maxWidth: "8rem",
                    m: "0rem",
                    p: "0.6rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SummonerSpells
                    sum1={{
                      id: championData.sum1.id,
                      icon: championData.sum1.icon,
                      name: championData.sum1.name,
                    }}
                    sum2={{
                      id: championData.sum2.id,
                      icon: championData.sum2.icon,
                      name: championData.sum2.name,
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    flex: "2",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                  }}
                >
                  <Box
                    sx={{
                      //border: "1px solid #ccc",
                      backgroundColor: "#091428",
                      borderRadius: "8px",
                      maxWidth: "8rem",
                      m: "0rem",
                      p: "0.6rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ItemSection items={championData.startItems} />
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  //border: "1px solid #ccc",
                  backgroundColor: "#091428",
                  borderRadius: "8px",
                  mb: "1rem",
                  p: 1,
                  maxWidth: "12rem",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#F0E6D2", mb: "0.5rem", ml: "0.5rem" }}
                >
                  Core Build
                </Typography>
                <ItemSection items={championData.coreItems} />
              </Box>
              <Box
                sx={{
                  //border: "1px solid #ccc",
                  backgroundColor: "#091428",
                  borderRadius: "8px",
                  mb: "1rem",
                  p: 1,
                  maxWidth: "12rem",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ color: "#F0E6D2", mb: "0.5rem", ml: "0.5rem" }}
                >
                  Late Game Items
                </Typography>
                <ItemSection items={championData.lateGameItems} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChampionDetails;
