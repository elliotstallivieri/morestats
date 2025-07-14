import { Rune } from "../types/Rune";
import { RuneFamily } from "../types/Rune";
import runeList from "../utils/staticData/runes.json";

// turns a rune family name to a RuneFamily enum value
function nameToRuneFamily(name: string): RuneFamily {
  switch (name) {
    case "Domination":
    case "0":
      return RuneFamily.Domination;
    case "Inspiration":
    case "1":
      return RuneFamily.Inspiration;
    case "Precision":
    case "2":
      return RuneFamily.Precision;
    case "Resolve":
    case "3":
      return RuneFamily.Resolve;
    case "Sorcery":
    case "4":
      return RuneFamily.Sorcery;
    case "StatMods":
      return RuneFamily.StatMods;
    default:
      throw new Error(`Unknown rune family: ${name}`);
  }
}

// return the position of the tree in the json file
function treeNameToPosition(name: string): number {
  switch (name) {
    case "Domination":
      return 0;
    case "Inspiration":
      return 1;
    case "Precision":
      return 2;
    case "Resolve":
      return 3;
    case "Sorcery":
      return 4;
    default:
      throw new Error(`Unknown rune family: ${name}`);
  }
}

// turns an element from runes.json to a Rune object
function toRuneFormat(
  id: number,
  icon: string,
  name: string,
  slots: number,
  family: string
): Rune {
  const formattedRune: Rune = {
    id: id,
    name: name,
    icon: icon,
    runeFamily: nameToRuneFamily(family),
    slot: slots,
  };
  return formattedRune;
}

export { toRuneFormat };

function toRunePack(tree: string): Rune[][] {
  // without "as {...}", variable would also have type number, causing error
  const treeFromJson = runeList[treeNameToPosition(tree)] as {
    id: number;
    key: string;
    icon: string;
    name: string;
    slots: {
      runes: {
        id: number;
        key: string;
        icon: string;
        name: string;
        shortDesc: string;
        longDesc: string;
      }[];
    }[];
  };
  let returnValue: Rune[][] = [];
  for (let i = 0; i < treeFromJson.slots.length; i++) {
    let runeRow: Rune[] = [];
    for (let j = 0; j < treeFromJson.slots[i].runes.length; j++) {
      const rune = treeFromJson.slots[i].runes[j];
      const formattedRune = toRuneFormat(
        rune.id,
        rune.icon,
        rune.name,
        i,
        treeFromJson.key
      );
      runeRow.push(formattedRune);
    }
    returnValue.push(runeRow);
  }

  return returnValue;
}

export { toRunePack };
