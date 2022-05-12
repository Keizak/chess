import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import store from './stateManagment/store'
import GameBoard from "./components/GameBoard/GameBoard";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <GameBoard/>
        </Provider>
    </React.StrictMode>
);

