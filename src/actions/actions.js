export const MAKE_MOVE = 'MAKE_MOVE';
export const RESTART = 'RESTART';
export const COMPUTER_MOVE = 'COMPUTER_MOVE';

export const makeMove = (row, position, char) => ({
  type: MAKE_MOVE,
  char,
  row,
  position,
});

export const restart = () => ({
  type: RESTART,
});

export const computerMove = computer => ({
  type: COMPUTER_MOVE,
  computer,
});
