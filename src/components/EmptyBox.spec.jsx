/* eslint-disable */
import React from 'react';
import EmptyBox from './EmptyBox';

it('Should call a makeMove callback when clicked', () => {
  const makeMove = jest.fn();

  const wrapper = shallow(<EmptyBox makeMove={makeMove} />);

  wrapper.simulate('click');

  expect(makeMove.mock.calls.length).toBe(1);
});
