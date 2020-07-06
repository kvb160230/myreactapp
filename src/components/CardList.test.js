import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';

it('expect to render CardList component', () => {

    const mockPeople = [
        {
            id: 1,
            name: 'Bruce Wayne',
            nickname: 'The Dark Knight‎‎‎',
            title: 'CEO',
            email: 'bruce@waynetech.com',
            team: 'Operations',
            default: 'test'
        }
    ]
  const cardComponent = shallow(<CardList people={mockPeople} />);
  expect(cardComponent.debug()).toMatchSnapshot();
});

