import * as reducers from './reducers';
import * as types from './create-action-creators.js';
import { people } from './people';

const initialState = {
    searchField: '',
    filterField: '',
    people: people,
}

describe('getPeople reducer', () => {
    it('should return the initial state', () => {
      expect(reducers.getPeople(undefined, {})).toEqual(
        {
          searchField: '',
          filterField: '',
          people: people,
        }
      )
    })
  
    it('should handle CHANGE_SEARCH_FIELD', () => {
      expect(
        reducers.getPeople(initialState, {
          type: types.CHANGE_SEARCH_FIELD,
          payload: 'Krishna'
        })
      ).toEqual(
        {
          searchField: 'Krishna',
          filterField: '',
          people: people
        }
      )
    })

    it('should handle CHANGE_FILTER_FIELD', () => {
        expect(
          reducers.getPeople(initialState, {
            type: types.CHANGE_FILTER_FIELD,
            payload: 'Engineering'
          })
        ).toEqual(
          {
            searchField: '',
            filterField: 'Engineering',
            people: people
          }
        )
      })

      it('should handle GET_PEOPLE', () => {
        const text = [ {
            id: 1,
            name: 'Bruce Wayne',
            nickname: 'The Dark Knight‎‎‎',
            title: 'CEO',
            email: 'bruce@waynetech.com',
            team: 'Operations',
            default: 'test'
        }]

        expect(
          reducers.getPeople(initialState, {
            type: types.GET_PEOPLE,
            payload: text
          })
        ).toEqual(
          {
            searchField: '',
            filterField: '',
            people: text
          }
        )
      })
  })