import React from 'react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

function Header(props) {
    const theme = {
        night: {
            "--bgcolor": "#fff",
            "--fgcolor": "#666",
            "--hlcolor": "#fd7014"
        },
        day: {
            "--bgcolor": "#000",
            "--fgcolor": "#fff",
            "--hlcolor": "#fd7014"
        }
    }

    function toggleNightMode() {
        props.setNightMode(!props.nightMode);
        Object.entries(props.nightMode ? theme.night : theme.day)
            .map((entry) => (
                document.documentElement.style.setProperty(entry[0], entry[1])
            )
        )
    }

    return (
        <div className="header">
            {
                props.nightMode
                    ? <BsFillSunFill className="nightToggler" color='#fd7014' onClick={() => toggleNightMode()}></BsFillSunFill>
                    : <BsFillMoonFill className="nightToggler" color='#fd7014' onClick={() => toggleNightMode()}></BsFillMoonFill>
            }
        </div>
    )
}

export default Header;
