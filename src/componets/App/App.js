import React from 'react';

import './App.css';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ItemsList from '../ItemsList';
import DetailsInfo from '../DetailsInfo';


export default class App  extends React.Component {

    state = {
        isRandomPlanet: true,
    }

    onTogglePlanet =() => {
        this.setState((prevState) => {
            return {isRandomPlanet: !prevState.isRandomPlanet}
    })
    }
render (){
    
    return(
        <div className="App">
            <Header />
            {this.state.isRandomPlanet && <RandomPlanet />}
            <button onClick={this.onTogglePlanet}>
                on/off planet
            </button>
            <div className="d-flex">
                <ItemsList />
                <DetailsInfo />
            </div>
        </div>
    )
}
}

