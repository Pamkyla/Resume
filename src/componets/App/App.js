import React from 'react';


import './App.css';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorComponent from '../ErrorComponent';
import PeoplePage from '../PeoplePage';
import StarShipPage from '../StarShipPage';
import SwapiService from '../../services/SwapiService';
import PlanetPage from '../PlanetPage';
import SwapiContext from '../SwapiServiceContext';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from '../MainPage';

export default class App extends React.Component {

    swapi = new SwapiService();

    state = {
        error: false,
    }

    componentDidCatch() {
        this.setState({ error: true });
    }

    onTogglePlanet = () => {
        this.setState((prevState) => {
            return { isRandomPlanet: !prevState.isRandomPlanet, }
        });
    }

    render() {
        if (this.state.error) {
            return <ErrorComponent />
        }

        return (

            <SwapiContext.Provider value={this.swapi}>
                <Router>
                    <div className="App">
                        <Header />
                        <RandomPlanet />
                        <Route path="/" exact>
                            <h3>A long time ago in a galaxy far, far away....</h3>
                            <MainPage />
                        </Route>
                        <Route path="/people/">
                            <h3>People</h3>
                            <PeoplePage />
                        </Route>
                        <Route path="/planets/">
                            <h3>Planet</h3>
                            <PlanetPage />
                        </Route>
                        <Route path="/ships/">
                            <h3>Starships</h3>
                            <StarShipPage />
                        </Route>
                    </div>
                </Router>
            </SwapiContext.Provider>
        )
    }
}
