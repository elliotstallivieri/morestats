import { Player } from "../types/Player";
import { Game } from "../types/Game";
import { Championship } from "../types/Championship";

export function getPlayerDataExample(): Player {
  /*    const player : Player = {
    id: 1,
    name: "Faker",
    team: "T1",
    gameTotal: 100,
    winTotal: 60,
    blueSideTotal: 50, 
    blueSideWinTotal: 30,
    icon: "https://example.com/icon.png",
    
    }*/
  return {
    id: 1,
    name: "Faker",
    team: "T1",
    position: 2,
    gameTotal: 1,
    winTotal: 1,
    blueSideTotal: 1,
    blueSideWinTotal: 1,
    icon: "https://lol.fandom.com/wiki/Faker#/media/File:T1_Faker_2025_Split_1.png",
  };
}

export function getPlayerGameDataExample(): Game[] {
  return [
    
    {
      id: 1,
      date: "2023-10-01T12:00:00Z",
      competition: Championship.LCK,
      teamBlue: "HLE",
      teamRed: "T1",
      winner: false,
      patch: "25.11",
      gameDuration: 1855,
      champions: [
        ["Garen", "Vi", "Orianna", "Jinx", "Thresh"],
        ["Renekton", "Lee Sin", "Yone", "Ezreal", "Karma"],
      ],
      golDiff10: [-300, -500, 126, 56, 3],
      golDiff15: [-1500, -236, -563, -620, 55],
      golDiff20: [-2000, -100, -1000, -1800, -100],
      golDiff25: [-2500, 0, -1200, -2000, -800],
      goldDiff30: [-3000, -200, -1500, -2500, -1000],
      firstBlood: [1, 3, 3],
      firstTo6: [1, 3],
      damageDealt: [
        [214, 53, 226, 173, 45],
        [18, 146, 176, 173, 101],
      ],
      kda: [
        [
          [1, 4, 1],
          [0, 7, 2],
          [3, 2, 0],
          [0, 5, 2],
          [0, 4, 3],
        ],
        [
          [0, 1, 13],
          [10, 1, 8],
          [1, 1, 13],
          [8, 0, 11],
          [3, 1, 14],
        ],
      ],
    },{
      id: 2,
      date: "2023-10-01T12:00:00Z",
      competition: Championship.LCK,
      teamBlue: "HLE",
      teamRed: "T1",
      winner: false,
      patch: "25.11",
      gameDuration: 2035,
      champions: [
        ["Garen", "Vi", "Orianna", "Jinx", "Thresh"],
        ["Renekton", "Lee Sin", "Yone", "Ezreal", "Karma"],
      ],
      golDiff10: [-300, -500, 126, 56, 3],
      golDiff15: [-1500, -236, -563, -620, 55],
      golDiff20: [-2000, -100, -1000, -1800, -100],
      golDiff25: [-2500, 0, -1200, -2000, -800],
      goldDiff30: [-3000, -200, -1500, -2500, -1000],
      firstBlood: [1, 3, 3],
      firstTo6: [1, 3],
      damageDealt: [
        [242, 203, 277, 163, 118],
        [424, 172, 215, 377, 95],
      ],
      kda: [
        [
          [1, 6, 8],
          [7, 4, 6],
          [4, 4, 5],
          [4, 4, 5],
          [0, 6, 13],
        ],
        [
          [9, 3, 9],
          [4, 4, 10],
          [6, 6, 8],
          [5, 2, 12],
          [0, 2, 15],
        ],
      ],
    },{
      id: 3,
      date: "2023-10-01T12:00:00Z",
      competition: Championship.LCK,
      teamBlue: "T1",
      teamRed: "HLE",
      winner: true,
      patch: "25.11",
      gameDuration: 1927, // 32 minutes in seconds
      champions: [
        ["Garen", "Vi", "Orianna", "Jinx", "Thresh"],
        ["Renekton", "Lee Sin", "Yone", "Ezreal", "Karma"],
      ],
      golDiff10: [300, -500, 150, 200, 100],
      golDiff15: [1500, -300, 800, 1200, 600],
      golDiff20: [2000, -100, 1000, 1800, 900],
      golDiff25: [2500, 0, 1200, 2000, 1100],
      goldDiff30: [3000, 200, 1500, 2500, 1300],
      firstBlood: [1, 0],
      firstTo6: [0, 2],
      damageDealt: [
        [20000, 10000, 16000, 18000, 9000],
        [15000, 10000, 12000, 18000, 5000],
      ],
      //goldEarned: [[8000, 7000,],[]],
      kda: [
        [
          [4, 0, 10],
          [9, 0, 13],
          [7, 1, 14],
          [9, 0, 10],
          [0, 2, 27],
        ],
        [
          [1, 7, 2],
          [1, 5, 1],
          [0, 5, 1],
          [1, 6, 2],
          [0, 6, 0],
        ],
      ],
    },
    // Add more games as needed
  ];
}

/*
template for a Game :) 
{
      id: ,
      date: "2023-10-01T12:00:00Z",
      competition: Championship.,
      teamBlue: "",
      teamRed: "",
      winner: ,
      patch: "25.11",
      gameDuration: 1927, 
      champions: [
        ["Garen", "Vi", "Orianna", "Jinx", "Thresh"],
        ["Renekton", "Lee Sin", "Yone", "Ezreal", "Karma"],
      ],
      golDiff10: [300, -500, 150, 200, 100],
      golDiff15: [1500, -300, 800, 1200, 600],
      golDiff20: [2000, -100, 1000, 1800, 900],
      golDiff25: [2500, 0, 1200, 2000, 1100],
      goldDiff30: [3000, 200, 1500, 2500, 1300],
      firstBlood: [, ],
      firstTo6: [, ],
      damageDealt: [
        [20000, 10000, 16000, 18000, 9000],
        [15000, 10000, 12000, 18000, 5000],
      ],
      kda: [[
        [, , ],
        [, , ],
        [, , ],
        [, , ],
        [, , ],
      ],[
        [, , ],
        [, , ],
        [, , ],
        [, , ],
        [, , ],
      ]]
    },

    */
