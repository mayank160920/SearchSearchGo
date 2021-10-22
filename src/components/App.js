import React,{useState} from 'react'

import Logo from './Logo';
import Header from './Header';
import Footer from './Footer';
import OptionsTab from './OptionsTab';
import SearchBox from './SearchBox';
import Routes from './Routes';

function App() {
    const [nightMode,setNightMode] = useState(false);
    return (
        <>
            <Header nightMode={nightMode} setNightMode={setNightMode}></Header>
            <div className="base_wrapper">
                <Logo nightMode={nightMode}></Logo>
                <SearchBox></SearchBox>
                <OptionsTab></OptionsTab>
                <Routes></Routes>
                <Footer></Footer>
            </div>
        </>
    )
}

export default App
