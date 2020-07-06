import {
    CHANGE_SEARCH_FIELD,
    CHANGE_FILTER_FIELD,
    GET_PEOPLE,
} from './create-action-creators.js';
import { people } from './people';


export const setSearchField = (text = '') => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const setFilterField = (text = 'All') => ({
    type: CHANGE_FILTER_FIELD,
    payload: text
})


export const requestPeople = (filteredPeople = people) => ({
       type: GET_PEOPLE,
       payload: filteredPeople
})