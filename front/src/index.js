import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import store from './stateManagment/store'
import {BrowserRouter} from "react-router-dom";
import Routers from "./router/routes";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
        <Provider store={store}>
            <Routers/>
        </Provider>
        </BrowserRouter>
    </React.StrictMode>
);

