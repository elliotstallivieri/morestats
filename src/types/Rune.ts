export enum RuneFamily {
  Precision = "Precision",
  Domination = "Domination",
  Sorcery = "Sorcery",
  Resolve = "Resolve",
  Inspiration = "Inspiration",
  StatMods = "StatMods",
}

export type Rune = {
  id: number;
  name: string;
  icon: string;
  runeFamily: string;
  slot: number; // 0 for keystone, 1-2-3 for minor rune 1-2-3
};
