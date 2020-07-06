import {
    CHANGE_SEARCH_FIELD,
    CHANGE_FILTER_FIELD,
    GET_PEOPLE,
} from './create-action-creators.js';

import { people } from './people';

const initialState = {
    searchField: '',
    filterField: '',
    people: people,
}

export const getPeople = (state= initialState, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload });
            //Returning a new state that will update the searchField with payload

        case CHANGE_FILTER_FIELD:
            return Object.assign({}, state, { filterField: action.payload });

        case GET_PEOPLE:
            return Object.assign({}, state, { people: action.payload} );

        default:
            return state;
    }
}