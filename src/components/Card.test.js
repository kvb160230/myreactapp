import React from 'react';
import { shallow } from 'enzyme';
import MediaCard from './Card';

it('expect to render Card component', () => {
  const cardComponent = shallow(<MediaCard />);
  expect(cardComponent.debug()).toMatchSnapshot();
});


// it('expect to render Card component', () => {
//   expect(shallow(<Card />).length).toEqual(1);
// }) npm test -- --coverage