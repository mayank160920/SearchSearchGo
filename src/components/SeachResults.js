import React, { useState, useEffect } from 'react'

function SeachResults() {
    const [results, setResults] = useState([]);

    async function fetchResults() {
        const url = 'https://cors-bypass.jmethew76.workers.dev/https://jsonkeeper.com/b/3KR0'
        const response = await fetch(url);
        const res_json = await response.json();
        // setResults(res_json.results.slice(0,10));
        setResults(res_json.image_results.slice(0, 10));
    }

    useEffect(() => fetchResults(), [])

    return (
        <div className="results-wrapper">
            {
                // results.map((result,index) => 
                //     <div className="result" key={index}>
                //         <a className="result-title" href={result.link}>{result.title}</a>
                //         <p className="result-description">{result.description}</p>
                //     </div>
                // )

                results.map((result, index) =>
                    <div className="result" key={index}>
                        <img
                            className="result-image"
                            src={result.image.src}
                            alt=""
                            href={result.link.href}>
                            {result.title}
                        </img>
                        <p className="result-title">{result.link.title}</p>
                    </div>
                )
            }
        </div>
    )
}

export default SeachResults
