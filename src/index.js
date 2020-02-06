import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'
import * as serviceWorker from './serviceWorker';
import {themes} from './static/themes'

const initialState = {
    favoriteStations: [],
    theme: 0
};

const applyTheme = theme => {
    Object.keys(theme).map(key => {
        const value = theme[key];
        document.documentElement.style.setProperty(key, value);
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_THEME":
            state = {
                ...state,
                theme: action.theme
            };
            applyTheme(themes[action.theme]);
            break;
        default:
            break;
    }
    return state;
};

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root'
    ));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

