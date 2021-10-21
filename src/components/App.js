import React from 'react'

import Header from './Header';
import OptionsTab from './OptionsTab';
import SearchBox from './SearchBox';
import SeachResults from './SeachResults';

function App() {
    return (
        <div>
            <Header></Header>
            <SearchBox></SearchBox>
            <OptionsTab></OptionsTab>
            <SeachResults></SeachResults>
        </div>
    )
}

export default App
