import React from 'react';

const FilterMenu = ({filterField, filterChange}) => {
    return (
        <div className = 'pa1'>
            <select onChange = {filterChange}>
                <option defaultValue="All">All</option>
                <option value="Customer Experience">Customer Experience</option>
                <option value="Engineering">Engineering</option>
                <option value="Operations">Operations</option>
            </select>
        </div>
    
    );
}

export default FilterMenu;