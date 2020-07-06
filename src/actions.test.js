import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import * as actions from "./actions.js";
import * as types from './create-action-creators.js';

export const mockStore = configureMockStore([thunkMiddleware]);

describe('actions', () => {
    it('should dispatch an action to search, and request people', () => {
    
      const mockProps = mockStore({
            getPeople: {
            people: [{
              id: 1,
              name: 'Krishna',
              nickname: 'The Dark Knight‎‎‎',
              title: 'CEO',
              email: 'bruce@waynetech.com',
              team: 'Operations',
              default: 'test'
            }],
            searchField: 'Krishna',
            filterField: ''
          }});


          const expectedAction = [
            {
              type: types.CHANGE_SEARCH_FIELD,
              payload: 'Krishna',
            },
            {
              type: types.GET_PEOPLE,
              payload: [{
                id: 10,
                name: 'Krishna Boreda',
                nickname: '‎‎‎',
                title: 'Software Engineer Intern ',
                email: 'krishna@call-em-all.com',
                team: 'Engineering',
                default: 'all'
              }],
            }]

      return mockProps.dispatch(actions.onSearchChange('Krishna'))
         .then(() => expect(mockProps.getActions()).toEqual((expectedAction)))
      
    })

    it('should dispatch an action to filter, and request people', () => {
    
      const mockProps = mockStore({
            getPeople: {
            people: [{
              id: 1,
              name: 'Krishna',
              nickname: 'The Dark Knight‎‎‎',
              title: 'CEO',
              email: 'bruce@waynetech.com',
              team: 'Operations',
              default: 'test'
            }],
            searchField: '',
            filterField: 'Engineering'
          }});


          const expectedAction = [
            {
              type: types.CHANGE_FILTER_FIELD,
              payload: 'Engineering',
            },
          ]

      return mockProps.dispatch(actions.onFilterChange('Engineering'))
         .then(() => expect(mockProps.getActions()).toEqual(expect.arrayContaining(expectedAction)))
      
    })

    it('should dispatch an action to filter, and request the right people', () => {
    
      const mockProps = mockStore({
            getPeople: {
            people: [{
              id: 1,
              name: 'Krishna',
              nickname: 'The Dark Knight‎‎‎',
              title: 'CEO',
              email: 'bruce@waynetech.com',
              team: 'Operations',
              default: 'test'
            }],
            searchField: '',
            filterField: 'Operations'
          }});


          const expectedAction = [
            {
              type: types.CHANGE_FILTER_FIELD,
              payload: 'Operations',
            },
          ]

      return mockProps.dispatch(actions.onFilterChange('Engineering'))
         .then(() => expect(mockProps.getActions()).not.toEqual(expect.arrayContaining(expectedAction)))
      
    })
  })

