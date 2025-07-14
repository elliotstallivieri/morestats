import getItem from "./Items/getItem";
import { Spell, spellKey } from "../types/Spell";

// This function is only used until the backend application is ready to serve data
// It can yet be improved by creating a json with all the champions and their data
// and then just fetching the data from the json file instead of hardcoding it here
function staticDataMaker(championName: string) {
  const spellBaseUrl = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/characters/${championName.toLowerCase()}/hud/icons2d/${championName.toLowerCase()}`;
  const spells: Spell[] = [
    {
      id: 0,
      name: "Command : Attack",
      icon: spellBaseUrl + "q.png",
      spellKey: spellKey.Q,
    },
    {
      id: 0,
      name: "Command : Dissonance",
      icon: spellBaseUrl + "w.png",
      spellKey: spellKey.W,
    },
    {
      id: 0,
      name: "Command : Protect",
      icon: spellBaseUrl + "e.png",
      spellKey: spellKey.E,
    },
    {
      id: 0,
      name: "Command : Shockwave",
      icon: spellBaseUrl + "r.png",
      spellKey: spellKey.R,
    },
  ];
  const championData = {
    id: 61,
    championName: championName,
    championImageUrl: `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_0.jpg`,
    keyStone: 4,
    primaryRuneList: [8214, 8226, 8210, 8237],
    secondaryTree: 2,
    secondaryRuneList: [8009, 9105],
    statMods: [5005, 5008, 5011],
    spells: spells,
    sum1: {
      id: 1,
      name: "Flash",
      icon: "lol-game-data/global/default/data/spells/icons2d/summoner_flash.png",
    },
    sum2: {
      id: 2,
      name: "Teleport",
      icon: "lol-game-data/global/default/data/spells/icons2d/summoner_teleport_new.png",
    },
    startItems: [getItem(1056), getItem(2003)],
    coreItems: [getItem(3003), getItem(3020), getItem(6653)],
    lateGameItems: [getItem(3089), getItem(3135), getItem(3157)],
  };
  return championData;
}
export default staticDataMaker;
