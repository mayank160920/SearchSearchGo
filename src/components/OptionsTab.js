import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import { BsImages, BsNewspaper, BsSearch } from 'react-icons/bs';

function OptionsTab() {
    const l_path = useLocation().pathname;
    return (
        <div className="optionsTab">
            <Link
                to="/search"
                className={`optionItem ${l_path === "/search" ? 'optionItem-active' : ""}`}>
                <BsSearch></BsSearch>
                <span>All</span>
            </Link>
            <Link
                to="/images"
                className={`optionItem ${l_path === "/images" ? 'optionItem-active' : ""}`}>
                <BsImages></BsImages>
                <span>Images</span>
            </Link>
            <Link
                to="/news"
                className={`optionItem ${l_path === "/news" ? 'optionItem-active' : ""}`}>
                <BsNewspaper></BsNewspaper>
                <span>News</span>
            </Link>
        </div>
    )
}

export default OptionsTab;
