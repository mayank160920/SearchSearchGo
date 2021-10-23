import React, { useEffect } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import {DebounceInput} from 'react-debounce-input';

import { useResultsContext } from '../context/ResultsContextProvider';

function SearchBox() {
    const showSuggestion = React.useRef(0);
    const [input, setInput] = React.useState("");
    const [suggestions, setSuggestions] = React.useState([]);
    const { setSearchTerm } = useResultsContext();

    function inputChangeHandler(event) {
        if (!showSuggestion.current) {
            showSuggestion.current = 1;
        }
        setInput(event.target.value);
    }

    async function fetchRelatedPhrases() {
        if (input.length === 0 || !showSuggestion.current) {
            setSuggestions([]);
            return
        }
        try {
            const url = "https://cors-bypass.jmethew76.workers.dev/https://duckduckgo.com/ac/?q="
            const response = await fetch(url + input);
            const res_json = await response.json();
            setSuggestions(res_json.map((data) => data.phrase))

        } catch {
            setSuggestions([]);
        }
    }

    function handleSuggestionClick(suggestion) {
        showSuggestion.current = 0;
        setSearchTerm(suggestion);
        setInput(suggestion);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => fetchRelatedPhrases(), [input])

    return (
        <div className="searchBox">
            <DebounceInput
                className="searchInput"
                type="text"
                value={input}
                debounceTimeout={300}
                onChange={(e) => inputChangeHandler(e)}
                onKeyPress={(e) => { if (e.key === "Enter") { setSuggestions([]);setSearchTerm(input) } }}
                autoFocus>
            </DebounceInput>

            <div
                className="suggestionList"
                style={{ display: suggestions.length === 0 ? "none" : "block" }}>
                {
                    suggestions.map((suggestion, index) =>
                        <ul 
                            key={index} 
                            class="suggestion"
                            onClick={() => handleSuggestionClick(suggestion)}>
                            {suggestion}
                        </ul>
                    )
                }
            </div>

            <div
                className="searchIcon-wrapper"
                onClick={() => setSearchTerm(input)}>
                <AiOutlineSearch className="searchIcon" />
            </div>
        </div>
    )
}

export default SearchBox
