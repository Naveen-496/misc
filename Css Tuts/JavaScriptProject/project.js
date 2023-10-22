// 1. Deposit some money
// 2. Determine the number of lines to bet on.
// 3. collect the bet amount.
// 4. spin the slot machine.
// 5. Check if the user has won.
// 6. Give the user thier winnings.
// 7. play again..

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};

const SYMBOLS_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a Deposit Amount: ");

    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid Deposit Amount, Try Again");
    } else {
     // console.log("You have deposited " + depositAmount + "$");
      return numberDepositAmount;
    }
  }
};

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter the number of lines to bet on (1 - 3): ");

    const numberOfLines = parseInt(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid number of lines, please enter a valid number.");
    } else {
      console.log("You have chosen to bet on " + numberOfLines + " lines");
      return numberOfLines;
    }
  }
};

const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("Enter the bet amount per line: ");

    const numberBet = parseFloat(bet);

    if (isNaN(numberBet) || numberBet <= 0) {
      console.log("Invalid bet, please try again.");
    } else if (numberBet > balance / lines) {
      console.log("Insufficient funds in the deposit");
    } else {
      console.log("You are betting " + numberBet + "$");
      return numberBet;
    }
  }
};

const spin = () => {
  const symbols = [];

  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    console.log(symbol, count);
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }
  const reals = [];

  for (let i = 0; i < COLS; i++) {
    reals.push([]);
    const realsSymbols = [...symbols];

    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * realsSymbols.length);
      const selectedSymbol = realsSymbols[randomIndex];
      reals[i].push(selectedSymbol);
      realsSymbols.splice(randomIndex, 1);
    }
  }
  return reals;
};

const transpose = (reels) => {
  const rows = [];

  for (let i = 0; i < ROWS; i++) {
    rows.push([]);

    for (let j = 0; j < COLS; j++) {
      rows[i].push(reels[j][i]);
    }
  }
  return rows;
};

const printRows = (rows) => {
  for (const row of rows) {
    let rowString = "";
    for (const [i, symbol] of row.entries()) {
      rowString += symbol;
      if (i != row.length - 1) {
        rowString += " | ";
      }
    }
    console.log(rowString);
  }
};

const getWinnings = (rows, bet, lines) => {
  let winnings = 0;

  for (let row = 0; row < lines; row++) {
    const symbols = rows[row];
    let allSame = true;

    for (const symbol of symbols) {
      if (symbol != symbols[0]) {
        allSame = false;
        break;
      }
    }

    if (allSame) {
      winnings += bet * SYMBOLS_VALUES[symbols[0]];
    }
  }
  return winnings;
};

const game = () => {
  let balance = deposit();

  while (true) {
    console.log("You have balance of $" + balance);

    const numberOfLines = getNumberOfLines();
    const bet = getBet(balance, numberOfLines);
    balance -= bet * numberOfLines;

    const reels = spin();
    const transposed = transpose(reels);
    printRows(transposed);

    const winnings = getWinnings(transposed, bet, numberOfLines);
    balance += winnings;
    console.log("Yo won, $" + winnings);

    const playAgain = prompt("Do you want to continue (y/n) ?: ");

    if (playAgain != "y") break;
  }
};

game();
