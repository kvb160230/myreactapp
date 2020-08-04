import { setSearchField, setFilterField, requestPeople} from './action-creators.js';
import { people } from './people.js';

export const onSearchChange = (searchValue = '') => (dispatch) => {
   return Promise.all ([
        dispatch(setSearchField(searchValue)),
        dispatch(onRequestPeople()),
    ])
}

export const onFilterChange = (filterValue = 'All') => (dispatch) => {
    return Promise.all ([
        dispatch(setFilterField(filterValue)),
        dispatch(onRequestPeople()),
    ])

}

export const onRequestPeople = (collectionsMap = people) => (dispatch, getState) => {
    const {searchField} = getState().getPeople;
    const {filterField} = getState().getPeople;

     const filteredPeople = collectionsMap.filter(person => {
        switch(searchField) {
            case null:
            case '':
                if(filterField === 'All' || filterField === 'all') {
                    return collectionsMap;
                }
                return person.default.toLowerCase().includes(filterField.toLowerCase())
                || person.team.toLowerCase().includes(filterField.toLowerCase());
                 
            default:
                if(filterField.toLowerCase() === person.default.toLowerCase())
                {
                    return person.name.toLowerCase().includes(searchField.toLowerCase());
                }
                else
                return person.name.toLowerCase().includes(searchField.toLowerCase())
                && person.team.toLowerCase().includes(filterField.toLowerCase());

        }
      })
   return dispatch(requestPeople(filteredPeople));
    

}


       
       

