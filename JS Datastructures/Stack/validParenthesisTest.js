function validPairs(parts) {
  const stack = [];
  for (const part of parts) {
    const isOpen = part.open;
    if (isOpen) {
      stack.push(part.closeNumber);
      continue;
    }

    const isEmpty = !parts.length;
    const isWrongPair = part.openNumber != stack.pop();
    const isInValidPair = isEmpty || isWrongPair;

    if (isInValidPair) return false;
  }
  return stack.length === 0;
}

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
];

console.log(validPairs(parts));
