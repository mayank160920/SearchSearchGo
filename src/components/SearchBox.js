import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';

function SearchBox() {
    return (
        <div className="searchBox">
            <input className="searchInput" type="text" autoFocus></input>
            <div className="searchIcon-wrapper">
                <AiOutlineSearch className="searchIcon">
                </AiOutlineSearch>
            </div>
        </div>
    )
}

export default SearchBox
