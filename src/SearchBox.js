import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div className = 'pa1'>
             <input 
                className = 'pa3 ba bg-washed-blue'
                type = 'search' 
                placeholder ='search name' 
                onChange = {searchChange}
             />
        </div>
    
    );
}

export default SearchBox;