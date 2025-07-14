import { Item } from "../../types/Item";

interface ItemData {
  name: string;
  id: number;
  simpleDescription: string;
  icon: string;
}

// Tell TypeScript that itemData is an object with string keys and ItemData values ,
const itemData: { [key: string]: ItemData } = require("./../staticData/items.json");

function getItem(id: number): Item {
  const toto = itemData["1001"].name;
  console.log("itemData[1001] : ", toto);
  let item: Item = {
    id: id,
    name: itemData[id?.toString()]?.name || "",
    description: itemData[id.toString()].simpleDescription,
    icon: itemData[id.toString()].icon,
  };
  return item;
}

export default getItem;
