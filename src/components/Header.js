import React from 'react';
import {AiFillSetting,AiOutlineMenuFold} from 'react-icons/ai';
import Logo from '../assets/logo.png';

function Header() {
    return (
        <div className="header">
            <AiOutlineMenuFold></AiOutlineMenuFold>
            <img src={Logo} alt="Unable To Load" height="100px"></img>
            <AiFillSetting></AiFillSetting>
        </div>
    )
}

export default Header
