import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import './styles.css';
import App from './components/App';
import {ResultsContextProvider} from '../src/context/ResultsContextProvider';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ResultsContextProvider>
                <App />
            </ResultsContextProvider>
        </BrowserRouter>
    </React.StrictMode>
    , document.getElementById('root')
)