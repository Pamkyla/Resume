import React from 'react';

import './App.css';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ItemsList from '../ItemsList';
import DetailsInfo from '../DetailsInfo';
import ErrorTest from '../ErrorTest'

export default class App  extends React.Component {

    state = {
        isRandomPlanet: true,
        selectedPerson: null,
    }

    componentDidCatch() {
       alert('произошла ошибка');
        
    }

    onTogglePlanet =() => {
        this.setState((prevState) => {
            return {isRandomPlanet: !prevState.isRandomPlanet}
    })
}

onPersonSelect = (id) => {
    this.setState({
        selectedPerson: id
    });
}


render (){
    
    return(
        <div className="App">
            <Header />
            {this.state.isRandomPlanet && <RandomPlanet />}
            <button onClick={this.onTogglePlanet}>
                on/off planet
            </button>
            <ErrorTest/>
            <div className="d-flex">
                <ItemsList onItemClick={this.onPersonSelect} />
                <DetailsInfo 
                    personId={this.state.selectedPerson}
                />
            </div>
        </div>
    )
}
}

