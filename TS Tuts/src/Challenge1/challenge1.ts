// Question: can we take data from Hoses.json and use them here?
// Ans: Yes.    In tsconfig.json file set resolveJsonModule: true and esModuleInterop: true;

import Houses from "./houses.json";
interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithId extends House {
  id: number;
}

function findHouses(
  inputHouses: string | House[],
  filter?: (house: House) => boolean
): HouseWithId[] {
  const houses: House[] =
    typeof inputHouses === "string" ? JSON.parse(inputHouses) : inputHouses;

  return (filter ? houses.filter(filter) : houses).map((house) => {
    return {
      id: houses.indexOf(house),
      ...house,
    };
  });
}

type FilterFunction = (house: House) => boolean;
const filterByName: FilterFunction = (house: House) => {
  return house.name === "Harkonan";
};

console.log(findHouses(JSON.stringify(Houses), filterByName));
console.log(findHouses(Houses, ({ name }) => name === "Atreides"));
