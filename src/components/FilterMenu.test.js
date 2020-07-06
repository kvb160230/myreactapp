import React from 'react';
import { shallow } from 'enzyme';
import FilterMenu from './FilterMenu.js';

it('expect to render Card component', () => {
  const cardComponent = shallow(<FilterMenu />);
  expect(cardComponent.debug()).toMatchSnapshot();
});