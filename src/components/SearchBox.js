import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';

import { useResultsContext } from '../context/ResultsContextProvider';

function SearchBox() {
    const [input, setInput] = React.useState("");
    const { setSearchTerm } = useResultsContext();

    return (
        <div className="searchBox">
            <input
                className="searchInput"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => { if (e.key === "Enter") { setSearchTerm(input) } }}
                autoFocus />
            <div
                className="searchIcon-wrapper"
                onClick={() => setSearchTerm(input)}>
                <AiOutlineSearch className="searchIcon" />
            </div>
        </div>
    )
}

export default SearchBox
