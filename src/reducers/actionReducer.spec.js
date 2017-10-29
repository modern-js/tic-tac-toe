/* eslint-disable */
import { startingState, actionReducer } from './actionReducer';
import { X, O } from '../characters/characters';

describe('Action Reducer State and dispatch specs', () => {
  
  const states = {
    starting: startingState,
    xWins: {
      board: {
        0: [X, X, ''],
        1: ['', O, O],
        2: ['', '', ''],
      },
      won: undefined,
      wonLine: undefined,
      draw: false,
      turn: X,
      computer: false,
    },
    draw: {
      board: {
        0: [O, X, O],
        1: [O, X, X],
        2: [X, O, ''],
      },
      won: undefined,
      wonLine: undefined,
      draw: false,
      turn: O,
      computer: false,
    }
  }
  it('Should make a move with O at row 0, position 0 and change turn.', () => {
    const nextState = actionReducer(states.starting, { type: 'MAKE_MOVE', char: O, row: 0, position: 0 });
    expect(nextState.board[0]).toEqual([O, '', '']);
    expect(nextState.turn).toEqual(X);
  });

  it('Should set prop won to X.', () => {
    const nextState = actionReducer(states.xWins, { type: 'MAKE_MOVE', char: X, row: 0, position: 2 });
    expect(nextState.won).toEqual(X);
  });

  it('Should reset the state to the starting one.', () => {
    const nextState = actionReducer(states.draw, { type: 'RESTART' });
    expect(nextState).toEqual(startingState);
  });

  it('Should make a move with O at row 2, position 2 and make a draw.', () => {
    const nextState = actionReducer(states.draw, { type: 'MAKE_MOVE', char: O, row: 2, position: 2 });
    expect(nextState.board[2]).toEqual([X, O, O]);
    expect(nextState.won).toEqual(undefined);
    expect(nextState.draw).toEqual(true);
  });

});
