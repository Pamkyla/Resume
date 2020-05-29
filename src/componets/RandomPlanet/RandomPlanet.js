import React from 'react';

import SwapiService from '../../services/SwapiService'
import './RandomPlanet.css';

export default class RandomPlanet extends React.Component{

    constructor() {
        super();
        this.updatePlanet();
    }

    swapi = new SwapiService();

    state = {
        name: null,
        diameter: null,
        population: null,
        gravity: null
    }

    updatePlanet() {
        this.swapi.getPlanet(4).then((planet) => {
            this.setState({
                name: planet.name,
                diameter: planet.diameter,
                population: planet.population,
                gravity: planet.gravity
            })
            
        }) ;
    }

    render() {
        
        const {name, diameter, population, gravity} = this.state;

        return(
            <div className="RandomPlanet">
            <h3>{name}</h3>
            <div className="d-flex planet_block">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCUuHd6YhII17P3uNGa8cVgLutlPBth7aN8Smn4sRk9fEiC5FE&usqp=CAU" alt="planet"/>
                <ul className="planet_info_block">
                    <li>
                        <span>diameter</span>
                        <span>{diameter}</span>
                    </li>
                    <li>
                        <span>population</span>
                        <span>{population}</span>
                    </li>
                    <li>
                        <span>gravity</span>
                        <span>{gravity}</span>
                    </li>
                </ul>
            </div>
        </div>
        );
    }
}
