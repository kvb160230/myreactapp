import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './SearchBox';

it('expect to render Card component', () => {
  const cardComponent = shallow(<SearchBox />);
  expect(cardComponent.debug()).toMatchSnapshot();
});