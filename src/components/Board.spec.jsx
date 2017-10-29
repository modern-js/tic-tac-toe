/* eslint-disable*/
import React from 'react';
import EmptyBox from './EmptyBox';
import XChar from './XChar';
import OChar from './OChar';
import { X, O } from '../characters/characters';
import { PureBoard as Board } from './Board';

const board = {
    0: [X, '', ''],
    1: ['', '', O],
    2: [X, O, O],
  };

it('Should render the Board component with characters', () => {
  const restart = jest.fn();
  const makeMove = jest.fn();
  const wrapper = shallow(<Board board={board} restart={restart} makeMove={makeMove} draw={false} turn={X} />);
  expect(wrapper.find(XChar).length).toBe(2);
  expect(wrapper.find(OChar).length).toBe(3);
  expect(wrapper.find(EmptyBox).length).toBe(4);
});

it('Should NOT display a Restart button when game is not finished', () => {
  const restart = jest.fn();
  const makeMove = jest.fn();
  const wrapper = shallow(<Board board={board} restart={restart} makeMove={makeMove} draw={false} turn={X} />);
  expect(wrapper.find('button.restart').length).toBe(0);
});

it('Should display Restart button when one player has won', () => {
  const restart = jest.fn();
  const makeMove = jest.fn();
  const wrapper = shallow(<Board board={board} won={X} restart={restart} makeMove={makeMove} draw={false} turn={X} />);
  expect(wrapper.find('button.restart').length).toBe(1);
});

it('Should display a restart button if there is a draw', () => {
  const restart = jest.fn();
  const makeMove = jest.fn();
  const wrapper = shallow(<Board board={board} draw={true} restart={restart} makeMove={makeMove} turn={X} />);
  expect(wrapper.find('button.restart').length).toBe(1);
});

it('Should call a passed action callback if the restart button is pressed"', () => {
  const restart = jest.fn();
  const makeMove = jest.fn();
  const wrapper = shallow(<Board board={board} won={X} restart={restart} makeMove={makeMove} draw={false} turn={X} />);
  wrapper.find('button.restart').simulate('click');
  expect(restart.mock.calls.length).toBe(1);
});
