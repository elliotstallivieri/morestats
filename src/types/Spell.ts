export enum spellKey {
  Q = "q",
  W = "w",
  E = "e",
  R = "r",
}

export type Spell = {
  id: number;
  name: string;
  icon: string;
  spellKey: spellKey; // e.g. "q", "w", "e", "r"
};
