/* eslint-disable */
import * as _ from 'lodash';
import { X, O } from '../characters/characters';
import { resultForMove } from '../rules/gameRules';
import * as actionType from '../actions/actions';

export const startingState = {
  board: {
    0: ['', '', ''],
    1: ['', '', ''],
    2: ['', '', ''],
  },
  won: undefined,
  wonLine: undefined,
  draw: false,
  turn: O,
  computer: false,
};

export const actionReducer = (state, action) => {
  switch (action.type) {
    case actionType.MAKE_MOVE:
      const { char, row, position } = action;
      const newState = _.cloneDeep(state);
      newState.board[row][position] = char;

      const xMoveResult = resultForMove(X, newState.board);
      const oMoveResult = resultForMove(O, newState.board);

      if (xMoveResult.won) {
        newState.won = X;
        newState.wonLine = xMoveResult.line;
      }

      if (oMoveResult.won) {
        newState.won = O;
        newState.wonLine = oMoveResult.line;
      }

      if (!newState.won) {
        newState.turn = newState.turn === O ? X : O;
      }

      const boardIsFull = [
        ...newState.board[0],
        ...newState.board[1],
        ...newState.board[2]
      ].filter(char => char !== '').length === 9;

      if (!newState.won && boardIsFull) {
        newState.draw = true;
      }
      return newState;
    case actionType.RESTART:
      return startingState;
    case actionType.COMPUTER_MOVE:
      const pcPlayer = action.computer;
      return newState
    default:
      return state;
  }
}

