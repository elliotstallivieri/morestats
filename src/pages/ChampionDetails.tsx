import React from "react";
import { Box, Button, Typography, Select, MenuItem } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate, useParams } from "react-router-dom";
import ChampionHeader from "../components/championDetails/ChampionHeader";
import ButtonBar from "../components/championDetails/ButtonBar";
import PrimaryRuneTree from "../components/championDetails/RuneSection/PrimaryRuneTree";
import { RuneFamily } from "../types/Rune";
import jsonRunes from "../utils/runes.json";
import { Rune } from "../types/Rune";
import { toRunePack } from "../utils/RuneFormatter";
import SecondaryMasteryTree from "../components/championDetails/RuneSection/SecondaryRuneTree";
import StatMods from "../components/championDetails/RuneSection/StatMods";
import SpellOrder from "../components/championDetails/SpellSection/SpellOrder";

interface RouteParams {
  [key: string]: string | undefined;
  championName: string;
}

const ChampionDetails: React.FC = () => {
  const { championName } = useParams<RouteParams>() || "Garen";
  const championImageUrl = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_0.jpg`;
  const navigate = useNavigate();
  const runeList = [
    {
      id: jsonRunes[4]["slots"][0]["runes"][0]["id"],
      name: jsonRunes[4]["slots"][0]["runes"][0]["name"],
      icon: jsonRunes[4]["slots"][0]["runes"][0]["icon"],
      runeFamily: RuneFamily.Sorcery,
      slot: 0,
    },
    {
      id: jsonRunes[4]["slots"][1]["runes"][1]["id"],
      name: jsonRunes[4]["slots"][1]["runes"][1]["name"],
      icon: jsonRunes[4]["slots"][1]["runes"][1]["icon"],
      runeFamily: RuneFamily.Sorcery,
      slot: 1,
    },
    {
      id: jsonRunes[4]["slots"][2]["runes"][0]["id"],
      name: jsonRunes[4]["slots"][2]["runes"][0]["name"],
      icon: jsonRunes[4]["slots"][2]["runes"][0]["icon"],
      runeFamily: RuneFamily.Sorcery,
      slot: 2,
    },
    {
      id: jsonRunes[4]["slots"][3]["runes"][0]["id"],
      name: jsonRunes[4]["slots"][3]["runes"][0]["name"],
      icon: jsonRunes[4]["slots"][3]["runes"][0]["icon"],
      runeFamily: RuneFamily.Sorcery,
      slot: 3,
    },
  ];
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
        <Button
          variant="outlined"
          startIcon={<HomeIcon />}
          onClick={() => navigate("/")}
        >
          Home
        </Button>
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
            //overflow: "hidden",
            borderRadius: "2%",
            //paddingRight: "-20%",
          }}
        >
          <Box
            component="img"
            src={championImageUrl}
            alt={championName}
            sx={{
              width: "100%", // jouer avec ce param
              height: "auto",
              //objectFit: "cover", // Remplit le conteneur en recadrant l'image
              //objectPosition: "top", // Ajuste la position pour garder la partie souhaitée
              //paddingRight: "47%",
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
              //maxWidth: "25%",
            }}
            id="DEBUG ICI"
          >
            <Box
              sx={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                maxWidth: "25%",
              }}
              id="TEST LA"
            >
              <PrimaryRuneTree
                selectedRuneIds={[8214, 8226, 8210, 8237]} // @TODO A RENDRE VARIABLE
                rows={toRunePack(jsonRunes[4].key) as Rune[][]}
              />
              <SecondaryMasteryTree
                rows={
                  [1, 2].map((i) => toRunePack(jsonRunes[2].key)[i]) as Rune[][]
                }
                selectedRuneIds={[8009, 9105]} // @TODO A RENDRE VARIABLE
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
                <StatMods selectedRuneId={[5005, 5008, 5011]} />
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  flex: "1",
                  backgroundColor: "#091428",
                  //border: "1px solid #ccc",
                  borderRadius: "8px",
                  p: 1,
                }}
              >
                <SpellOrder
                  championName={championName?.toLowerCase() || "Malzahar"}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "16px",
                }}
              >
                <Box
                  sx={{
                    flex: "1",
                    border: "1px solid #ccc",
                    p: 1,
                  }}
                >
                  <Typography variant="subtitle1" sx={{ color: "#F0E6D2" }}>
                    TODO : Summoners
                  </Typography>
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
                      border: "1px solid #ccc",
                      p: 1,
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ color: "#F0E6D2" }}>
                      TODO : Starter
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      border: "1px solid #ccc",
                      p: 1,
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ color: "#F0E6D2" }}>
                      TODO : Core Build
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      border: "1px solid #ccc",
                      p: 1,
                    }}
                  >
                    <Typography variant="subtitle1" sx={{ color: "#F0E6D2" }}>
                      TODO : Late Game Items
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ChampionDetails;
