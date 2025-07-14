export type PlayerGameStats = {
  playerId: number;
  playerName: string;

  // raw stats
  gameTotal: number;
  winTotal: number;
  blueSideTotal: number;
  blueSideWinTotal: number;
  kda: number[]; // [k, d, a]
  totalGameDuration: number; // in seconds
  firstBloodTotal: number; 
  perfectKDATotal: number; 
  playedChampionsList: string[]; // optional, if you want to track played champions
  
  // calculated stats
  winRate: number; // %
  blueSidePlayRate: number; 
  redSidePlayRate: number;
  blueSideWinRate: number;
  redSideWinRate: number;
  averageGameDuration: string; // in seconds
  averageKDA: number[];
  perfectKDARate: number; 
  damageShare: number; 
  firstBloodRate: number; 
  firstTo6Rate: number; 
  uniqueChampionsList: string[]; 
  uniqueChampionsCount: number; 
};
