import React from 'react';
import './App.css';
import Nav from './Components/Core/Nav';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Station from "./Views/Station/Station";
import Home from "./Views/Home/Home";
import LineIndicator from "./Components/Snippets/LineIndicator/LineIndicator";

function App() {


  return (
    <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Nav />
                <Switch>
                    <Route exact={true} path='/' render={() => (
                        <Home />
                    )}/>
                    <Route exact={true} path='/station/:stationID' render={({match}) => (
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
                    {/*<Route component={Error} />*/}
                </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
