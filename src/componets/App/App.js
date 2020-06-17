import React from 'react';


import './App.css';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ErrorTest from '../ErrorTest';
import ErrorComponent from '../ErrorComponent';
import PeoplePage from '../PeoplePage';
import SwapiService from '../../services/SwapiService';
import PlanetPage from '../PlanetPage';
import { SwapiProvaider } from '../SwapiServiceContext';

/* 
context - <del> proprty drill </del>.

1. Provider - setup
2. Consumer - count

*/

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
            return {isRandomPlanet: !prevState.isRandomPlanet,}
        });
    }

    render() {
        if (this.state.error) {
            return <ErrorComponent />
        }

        return (
            <SwapiProvaider value={this.swapi}>
            <div className="App">
                <Header />
                <RandomPlanet />
                <ErrorTest />
                <PeoplePage />
                <PlanetPage />
            </div>
            </SwapiProvaider>
        )
    }
}
