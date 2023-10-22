function validParenthesis(str, stack = []) {
  for (const bracket of str.split("")) {
    const isParenthesis = bracket === "(";
    if (isParenthesis) stack.push(")");

    const isCurleyBraces = bracket === "{";
    if (isCurleyBraces) stack.push("}");

    const isSquareBraces = bracket === "[";
    if (isSquareBraces) stack.push("]");

    const isOpenBracket = isParenthesis || isCurleyBraces || isSquareBraces;
    if (isOpenBracket) continue;

    const isEmpty = !str.length;
    const isWrongPair = bracket !== stack.pop();
    const isInValidPair = isEmpty || isWrongPair;

    if (isInValidPair) return false;
  }

  return stack.length === 0;
}

const str = "{}[]())";

console.log(validParenthesis(str));
