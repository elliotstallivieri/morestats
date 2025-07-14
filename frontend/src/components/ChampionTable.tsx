import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
} from "@mui/material";
import { Champion } from "../types/Champion";
import { useNavigate } from "react-router-dom";

// Données factices des champions
const championsData: Champion[] = [
  {
    id: 1,
    name: "Garen",
    winrate: 52.4,
    pickrate: 12.6,
    banrate: 6.5,
    icon: "/league-of-legends-icon-default.png",
    runes: [
      [2, 3],
      [3, 1, 1, 2],
      [-1, 0, 0],
    ],
  },
  {
    id: 2,
    name: "Renekton",
    winrate: 49.7,
    pickrate: 9.3,
    banrate: 7.1,
    icon: "/league-of-legends-icon-default.png",
    runes: [
      [2, 3],
      [3, 1, 0, 2],
      [0, 1, -1],
    ],
  },
  {
    id: 3,
    name: "Lee Sin",
    winrate: 49.1,
    pickrate: 11.9,
    banrate: 8.5,
    icon: "/league-of-legends-icon-default.png",
    runes: [
      [2, 1],
      [3, 1, 0, 0],
      [1, -1, 0],
    ],
  },
  {
    id: 4,
    name: "Vi",
    winrate: 50.3,
    pickrate: 10.2,
    banrate: 5.8,
    icon: "/league-of-legends-icon-default.png",
    runes: [
      [2, 3],
      [3, 1, 1, 2],
      [-1, 0, 0],
    ],
  },
  {
    id: 5,
    name: "Orianna",
    winrate: 53.1,
    pickrate: 8.5,
    banrate: 6.9,
    icon: "/league-of-legends-icon-default.png",
    runes: [
      [4, 3],
      [0, 1, 1, 2],
      [-1, 0, 0],
    ],
  },
  {
    id: 6,
    name: "Yone",
    winrate: 49.8,
    pickrate: 12.1,
    banrate: 7.2,
    icon: "/league-of-legends-icon-default.png",
    runes: [
      [2, 3],
      [3, 1, 1, 2],
      [-1, 0, 0],
    ],
  },
  {
    id: 7,
    name: "Ezreal",
    winrate: 50.4,
    pickrate: 14.3,
    banrate: 5.4,
    icon: "/league-of-legends-icon-default.png",
    runes: [
      [2, 3],
      [3, 1, 1, 2],
      [-1, 0, 0],
    ],
  },
  {
    id: 8,
    name: "Jinx",
    winrate: 51.9,
    pickrate: 13.2,
    banrate: 7.0,
    icon: "/league-of-legends-icon-default.png",
    runes: [
      [2, 3],
      [3, 1, 1, 2],
      [-1, 0, 0],
    ],
  },
  {
    id: 9,
    name: "Thresh",
    winrate: 51.2,
    pickrate: 10.9,
    banrate: 6.3,
    icon: "/league-of-legends-icon-default.png",
    runes: [
      [3, 2],
      [2, 1, 1, 2],
      [-1, 0, 0],
    ],
  },
  {
    id: 10,
    name: "Karma",
    winrate: 48.7,
    pickrate: 7.9,
    banrate: 5.5,
    icon: "/league-of-legends-icon-default.png",
    runes: [
      [4, 2],
      [1, 0, 0, 0],
      [-1, 2, 0],
    ],
  },
];

const ChampionTable: React.FC = () => {
  const [orderBy, setOrderBy] = useState<keyof Champion>("winrate");
  const [order, setOrder] = useState<"asc" | "desc">("desc");
  const navigate = useNavigate();

  const handleSort = (property: keyof Champion) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedChampions = [...championsData].sort((a, b) => {
    const valueA = a[orderBy];
    const valueB = b[orderBy];

    if (typeof valueA === "number" && typeof valueB === "number") {
      return order === "asc" ? valueA - valueB : valueB - valueA;
    }

    return order === "asc"
      ? String(valueA).localeCompare(String(valueB))
      : String(valueB).localeCompare(String(valueA));
  });

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active={orderBy === "name"}
                direction={orderBy === "name" ? order : "asc"}
                onClick={() => handleSort("name")}
              >
                Champion
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === "winrate"}
                direction={orderBy === "winrate" ? order : "asc"}
                onClick={() => handleSort("winrate")}
              >
                Winrate
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === "pickrate"}
                direction={orderBy === "pickrate" ? order : "asc"}
                onClick={() => handleSort("pickrate")}
              >
                Pickrate
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === "banrate"}
                direction={orderBy === "banrate" ? order : "asc"}
                onClick={() => handleSort("banrate")}
              >
                Banrate
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedChampions.map((champion) => (
            <TableRow
              key={champion.id}
              onClick={() => navigate(`/morestats/champions/${champion.name}`)}
            >
              <TableCell>
                <img
                  src={champion.icon}
                  alt={champion.name}
                  style={{ width: 30, height: 30, marginRight: 10 }}
                />
                {champion.name}
              </TableCell>
              <TableCell>{champion.winrate}%</TableCell>
              <TableCell>{champion.pickrate}%</TableCell>
              <TableCell>{champion.banrate}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ChampionTable;
