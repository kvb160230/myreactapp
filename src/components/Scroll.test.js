import React from 'react';
import { shallow } from 'enzyme';
import Scroll from './Scroll';

it('expect to render Card component', () => {
  const cardComponent = shallow(<Scroll />);
  expect(cardComponent.debug()).toMatchSnapshot();
});