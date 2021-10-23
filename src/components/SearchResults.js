/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useResultsContext } from '../context/ResultsContextProvider'
import Loader from "react-loader-spinner";

function SearchResults() {
    const location = useLocation();
    const { results, getResults, searchTerm, loading, error } = useResultsContext();
    console.log(results, searchTerm, loading, error)

    async function updateResults() {
        if (searchTerm.length !== 0) {
            const query = `${location.pathname}/q=${searchTerm}&num=25`;
            await getResults(query);
        }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => updateResults(), [searchTerm, location.pathname])

    if (loading) {
        return <Loader type="ThreeDots" color="#fd7014" height={50} width={50} style={{ textAlign: 'center' }} />
    }

    if (error) {
        return (<p style={{ textAlign: "center" }}>Something Went Wrong :(</p>);
    }

    if (searchTerm.length === 0) {
        return <></>;
    }

    switch (location.pathname) {
        case "/search":
            return (
                <div className="text-results-wrapper">
                    {
                        results?.results?.map((result, index) =>
                            <div className="text-result" key={index}>
                                <a className="text-result-title" href={result.link} target="_blank">{result.title}</a>
                                <p className="text-result-description">{result.description}</p>
                            </div>
                        )
                    }
                </div>
            )
        case "/images":
            return (
                <div className="image-results-wrapper">
                    {
                        results?.image_results?.map((result, index) =>
                            <div className="image-result" key={index}>
                                <img
                                    className="image-result-image"
                                    src={result.image.src}
                                    alt=""
                                    href={result.link.href}
                                    target="_blank"
                                >
                                    {result.title}
                                </img>
                                <p className="image-result-title">{result.link.title}</p>
                            </div>
                        )
                    }
                </div>
            )
        case "/news":
            return (
                <div className="news-results-wrapper">
                    {
                        results?.entries?.map((result, index) =>
                            <div className="news-result" key={index}>
                                <a className="news-result-title" href={result.link} target="_blank">{result.title}</a>
                                <div className="news-result-description">
                                    <p className="news-result-author">{result.source.title}</p>
                                    <p>&nbsp;|&nbsp;</p>
                                    <p className="news-result-publicationDate">{result.published}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            )
        default:
            return <>Opps !</>
    }
}

export default SearchResults;
