const parts = [
  {
    id: "1234",
    name: "box",
    open: true,
    closeNumber: "47475",
  },
  {
    id: "1234",
    name: "box",
    open: false,
    openNumber: "47475",
  },
  {
    id: "1234",
    name: "box",
    open: true,
    closeNumber: "47425",
  },
  {
    id: "1234",
    name: "box",
    open: false,
    openNumber: "47425",
  },
  {
    id: "1234",
    name: "box",
    open: false,
    openNumber: "47425",
  },
  {
    id: "1234",
    name: "box",
    open: false,
    openNumber: "47428",
  },
];

function validParts(parts) {
  const partsMap = {};

  for (const part of parts) {
    if (!partsMap[part.open]) {
      partsMap[part.open] = 1;
    } else partsMap[part.open] = partsMap[part.open] + 1;
  }

  const values = Object.values(partsMap);
  if (!values.length) return "empty";
  for (const value of values) {
    if (value % 2 !== 0) {
      return false;
    }
  }
  return true;
}

// console.log(validParts(parts));

// set the open pairs and close pairs in the map

function validPairsTwo(parts) {
  const partsMap = {};

  for (const part of parts) {
    if (part.open) {
      partsMap[part.closeNumber] = 0;
    } else {
      // find  opening of this closing pair
      partsMap[part.openNumber]++;
    }
  }
  console.log(partsMap);

  for (const value of Object.values(partsMap)) {
    if (value !== 1) return false;
  }
  return true;
}
console.log(validPairsTwo(parts));
