import { Championship } from "./Championship";

export type Game = {
  id: number;
  date: string; // ISO 8601 format
  competition: Championship;
  teamBlue: string;
  teamRed: string;
  winner: boolean;
  patch: string;
  gameDuration: number; // in seconds
  champions: string[][];
  golDiff10: number[];
  golDiff15: number[];
  golDiff20: number[];
  golDiff25: number[];
  goldDiff30: number[];
  firstBlood: number[]; // [1,0, 4] si jgl red tue supp
  firstTo6: number[]; // [0,1,1,0,1] pour chaque role, 0 pour le blue side, 1 pour le red side
  damageDealt: number[][];
  kda: number[][][]; //[[k,d,a],[k,d,a],[k,d,a],...]
  goldEarned?: number[][];
  bans?: string[][]; // optional, if bans are available
  pickOrder?: number[];
};
