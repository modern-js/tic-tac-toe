/* eslint-disable */
import React from 'react';
import { PureAnnouncement as Announcement } from './Announcement';

it('Should render an Announcent that player O is next.', () => {
  const wrapper = shallow(<Announcement turn={'o'} draw={false} />);
  expect(wrapper.find('p').text()).toEqual('Player O is next.');
});

it('Should render an Announcement that player X has won.', () => {
  const wrapper = shallow(<Announcement won={'x'} draw={false} turn={'x'} />);
  expect(wrapper.find('p').text()).toEqual('Player X won!');
});

it('Should render an Announcement about a draw.', () => {
  const wrapper = shallow(<Announcement draw={true} turn={'x'} />);
  expect(wrapper.find('p').text()).toEqual('DRAW!');
});
