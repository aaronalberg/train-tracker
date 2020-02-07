import React from 'react';
import './App.css';
import Nav from './Components/Core/Nav/Nav';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Station from "./Views/Station/Station";
import Home from "./Views/Home/Home";
import LineIndicator from "./Components/Snippets/LineIndicator/LineIndicator";
import API from "./Components/API";
import Error from "./Views/Error";
import Settings from "./Views/Settings/Settings";
import {themes} from "./static/themes";
import {connect} from "react-redux";

let theme;

function App() {

    Object.keys(themes[theme]).map(key => {
        const value = themes[theme][key];
        document.documentElement.style.setProperty(key, value);
    });

    return (
    <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <API />
            <Nav />
                <Switch>
                    <Route exact={true} path='/' render={() => (
                        <Home />
                    )}/>
                    <Route exact={true} path='/station/:stationID' render={({ match }) => (
                       <Station
                           id={match.params.stationID}
                       />
                    )}/>
                    <Route exact={true} path='/train/:trainID' render={({ match }) => (
                        <h1>
                            {match.params.trainID}
                            <LineIndicator
                                branch="12"
                            />
                        </h1>
                    )}/>
                    <Route exact={true} path='/settings' render={() => (
                        <Settings />
                    )}/>
                    <Route component={Error} />
                </Switch>
        </BrowserRouter>
    </div>
    );
}

const mapTheme = (state) => (
    theme = state.theme
);

export default connect(mapTheme)(App);