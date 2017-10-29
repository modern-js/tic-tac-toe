/* eslint-disable */

import { resultForMove } from './gameRules';
import { X, O } from '../characters/characters';

describe('Game Rules Spec', () => {
  const boards = {
    noWinner: {
      0: ['', '', ''],
      1: [O, X, O],
      2: ['', '', '']
    },
    x: {
      firstRow: {
        0: [X, X, X],
        1: ['', '', O],
        2: ['', '', O],
      },
      secondRow: {
        0: ['', '', O],
        1: [X, X, X],
        2: ['', '', O],
      },
      thirdRow: {
        0: ['', O, ''],
        1: ['', O, ''],
        2: [X, X, X],
      },
      rightDiag: {
        0: ['', O, X],
        1: ['', X, ''],
        2: [X, '', O],
      },
    },
    o: {
      leftCol: {
        0: [O, X, X],
        1: [O, '', ''],
        2: [O, '', X]
      },
      midCol: {
        0: ['', O, X],
        1: ['', O, ''],
        2: [X, O, X]
      },
      rightCol: {
        0: ['', X, O],
        1: [X, '', O],
        2: [X, '', O]
      },
      leftDiag: {
        0: [O, X, X],
        1: ['', O, ''],
        2: [X, '', O]
      }
    }
  };
  
  it('Should show no winner', () => {
    const xResult = resultForMove(X, boards.noWinner);
    const oResult = resultForMove(O, boards.noWinner);
    expect(xResult.won).toBe(false);
    expect(oResult.won).toBe(false);
  });

  describe('Rows Specs', () => {
    it('Should show X for winner in the first row', () => {
      const xResult = resultForMove(X, boards.x.firstRow);
      const oResult = resultForMove(O, boards.x.firstRow);
      expect(xResult.won).toBe(true);
      expect(xResult.line).toBe('row0');
      expect(oResult.won).toBe(false);
    });

    it('Should show X for winner in the second row', () => {
      const xResult = resultForMove(X, boards.x.secondRow);
      const oResult = resultForMove(O, boards.x.secondRow);
      expect(xResult.won).toBe(true);
      expect(xResult.line).toBe('row1');
      expect(oResult.won).toBe(false);
    });

    it('Should show X for winner in the third row', () => {
      const xResult = resultForMove(X, boards.x.thirdRow);
      const oResult = resultForMove(O, boards.x.thirdRow);
      expect(xResult.won).toBe(true);
      expect(xResult.line).toBe('row2');
      expect(oResult.won).toBe(false);
    });
  });

  describe('Columns Specs', () => {
    it('Should show O for winner in the left column', () => {
      const xResult = resultForMove(X, boards.o.leftCol);
      const oResult = resultForMove(O, boards.o.leftCol);
      expect(xResult.won).toBe(false);
      expect(oResult.won).toBe(true);
      expect(oResult.line).toBe('column0');
    });

    it('Should show O for winner in the middle column', () => {
      const xResult = resultForMove(X, boards.o.midCol);
      const oResult = resultForMove(O, boards.o.midCol);
      expect(xResult.won).toBe(false);
      expect(oResult.won).toBe(true);
      expect(oResult.line).toBe('column1');
    });

    it('Should show O for winner in the right column', () => {
      const xResult = resultForMove(X, boards.o.rightCol);
      const oResult = resultForMove(O, boards.o.rightCol);
      expect(xResult.won).toBe(false);
      expect(oResult.won).toBe(true);
      expect(oResult.line).toBe('column2');
    });
  });

  describe('Diagonals Specs', () => {
    it('Should show O for winner in left diagonal', () => {
      const xResult = resultForMove(X, boards.o.leftDiag);
      const oResult = resultForMove(O, boards.o.leftDiag);
      expect(xResult.won).toBe(false);
      expect(oResult.won).toBe(true);
      expect(oResult.line).toBe('leftDiag');
    });

    it('Should show X for winner in right diagonal', () => {
      const xResult = resultForMove(X, boards.x.rightDiag);
      const oResult = resultForMove(O, boards.x.rightDiag);
      expect(xResult.won).toBe(true);
      expect(xResult.line).toBe('rightDiag');
      expect(oResult.won).toBe(false);
    });
  });
});
