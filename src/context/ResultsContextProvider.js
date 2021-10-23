import React, { useContext,createContext, useState } from 'react';

const ResultsContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export function ResultsContextProvider({ children }) {

    const [results, setResults] = useState([]);
    const [loading, isLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [error,setError] = useState(false);

    async function getResults(type) {
        isLoading(true);

        try {
            setError(false);
            const response = await fetch(`${baseUrl}${type}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "google-search3.p.rapidapi.com",
                    "x-rapidapi-key": process.env.REACT_APP_X_RAPID_API_KEY
                }
            })
            
            if (response.status === 200) {
                const data = await response.json();
                console.log("response.status : ",response.status);
                setResults(data);
            } else {
                throw Error(response.status.toString());
            }
        } catch {
            setError(true);
        }
        
        isLoading(false);
    }

    return (
        <ResultsContext.Provider value={{ results, getResults, searchTerm, setSearchTerm, loading, error }}>
            {children}
        </ResultsContext.Provider>
    )
}

// optional -> we can make a hook for convenience
export function useResultsContext () {
    return useContext(ResultsContext);
}