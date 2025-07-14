export type Player = {
  id: number;
  name: string;
  team: string;
  position: number; // 0 top -> 4 support
  gameTotal: number;
  winTotal: number;
  blueSideTotal: number;
  blueSideWinTotal: number;
  icon: string;
};
