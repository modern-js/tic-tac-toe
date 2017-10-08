/* eslint-disable */
const countInRow = (char, row) => row.filter(el => el === char).length;
const countInColumn = (char, colNumber, ...rows) => rows.map(row => row[colNumber]).filter(el => el === char).length;
const countLeft = (char, ...rows) => {
  const [row0, row1, row2] = rows;
  return [row0[0], row1[1], row2[2]].filter(el => el === char).length;
};
const countRight = (char, ...rows) => {
  const [row0, row1, row2] = rows;
  return [row0[2], row1[1], row2[0]].filter(el => el === char).length;
};

const winnerRow = (char, row) => countInRow(char, row) === 3;
const winnerColumn = (char, colNumber, ...rows) => countInColumn(char, colNumber, ...rows) === 3;
const winnerLeftDiagonal = (char, ...rows) => countLeft(char, ...rows) === 3;
const winnerRightDiagonal = (char, ...rows) => countRight(char, ...rows) === 3;

export const resultForMove = (char, board) => {
  const rows = Object.keys(board).map(row => board[row]);
  const result = [
    { line: 'row0', won: winnerRow(char, board[0]) },
    { line: 'row1', won: winnerRow(char, board[1]) },
    { line: 'row2', won: winnerRow(char, board[2]) },
    { line: 'column0', won: winnerColumn(char, 0, ...rows) },
    { line: 'column1', won: winnerColumn(char, 1, ...rows) },
    { line: 'column2', won: winnerColumn(char, 2, ...rows) },
    { line: 'leftDiag', won: winnerLeftDiagonal(char, ...rows) },
    { line: 'rightDiag', won: winnerRightDiagonal(char, ...rows) },
  ]
    .reduce((acc, current) => {
      return current.won ? current : acc;
    }, { won: false });

  return result;
};

