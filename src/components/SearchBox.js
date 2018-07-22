import React from 'react';

import './SearchBox.css';

const SearchBox = ({ searchField, searchChange }) => {
    return (
        <div className="search-box">
            <input 
                aria-label="Filter RoboCats"
                className='search-input'
                type='search'
                placeholder='Search robot'
                onChange={searchChange}
            />
        </div>
    );
};

export default SearchBox;