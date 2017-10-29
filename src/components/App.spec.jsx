/* eslint-disable */
import React from 'react';
import App from './App';
import Announcement from './Announcement';
import Board from './Board';

it('Should render the App component with Announcement and Board inside it', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(Announcement).length).toBe(1);
  expect(wrapper.find(Board).length).toBe(1);
});
