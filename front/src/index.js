import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import store from './stateManagment/store'
import {BrowserRouter} from "react-router-dom";
import Routers from "./router/routes";
import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
margin: 0;
padding: 0;
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <GlobalStyles/>
            <Provider store={store}>
                <Routers/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);

