import React from 'react';
import logo from '../assets/logo.png';

function Logo (props) {
    return (
        <div className={`${props.nightMode ? 'logo-night' : 'logo'}`}>
            <img src={logo} alt="Unable To Load" height="100px"></img>
        </div>
    )
}

export default Logo;
