import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className="">
            <input className="pa2 bw2 b--light-blue br2"
                type="search"
                placeholder="search robots"
                onChange={searchChange} /> 
                {/* 每次onChange, call searchChange function */}
        </div>
    );
}

export default SearchBox;