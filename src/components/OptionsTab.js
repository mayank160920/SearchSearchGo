import React from 'react';
import {Link} from 'react-router-dom'
import {BsImages,BsNewspaper,BsSearch} from 'react-icons/bs';

function OptionsTab () {
    return (
        <div className="optionsTab">
            <Link to="/" className="optionItem">
                <BsSearch></BsSearch>
                <span>All</span>
            </Link>
            <Link to="/images" className="optionItem">
                <BsImages></BsImages>
                <span>Images</span>
            </Link>
            <Link to="/news" className="optionItem">
                <BsNewspaper></BsNewspaper>
                <span>News</span>
            </Link>
        </div>
    )
}

export default OptionsTab;
