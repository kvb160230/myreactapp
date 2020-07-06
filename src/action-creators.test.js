import * as actionCreator from './action-creators.js';
import * as types from './create-action-creators.js';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

export const mockStore = configureMockStore([thunkMiddleware]);

describe('actions', () => {
  it('should create an action to search', () => {
    const text = 'Krishna'
    const expectedAction = {
      type: types.CHANGE_SEARCH_FIELD,
      payload: text
    }
    expect(actionCreator.setSearchField(text)).toEqual(expectedAction)
  })

  it('should create an action to filter', () => {
    const text = 'All'
    const expectedAction = {
      type: types.CHANGE_FILTER_FIELD,
      payload: text
    }
    expect(actionCreator.setFilterField(text)).toEqual(expectedAction)
  })

  it('should create an action to get people', () => {
    const text = [ {
      id: 1,
      name: 'Bruce Wayne',
      nickname: 'The Dark Knight‎‎‎',
      title: 'CEO',
      email: 'bruce@waynetech.com',
      team: 'Operations',
      default: 'test'
  }]
    const expectedAction = {
      type: types.GET_PEOPLE,
      payload: text
    }
    expect(actionCreator.requestPeople(text)).toEqual(expectedAction)
  })
})