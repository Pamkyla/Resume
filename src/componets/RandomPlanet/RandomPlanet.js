import React from 'react';

import SwapiService from '../../services/SwapiService'
import './RandomPlanet.css';
import Loader from '../Loader';
import ErrorComponent from '../ErrorComponent'

export default class RandomPlanet extends React.Component{

    constructor() {
        super();
        
    }

    swapi = new SwapiService();

    state = {
       planet: {},
       load: true,
       error: false,
    }

    componentDidMount() {
        this.updatePlanet();
        setInterval(this.updatePlanet, 2000);
    }

    componentWillUnmount() {
        
    }

    onError = () => {
        this.setState({
            error: true,
        });
    }
    
    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            load: false,
        });
    }


    updatePlanet() {
        this.swapi.getAllPeople();
        const id = Math.round(Math.random()*25);
        this.swapi.getPlanet(id)
            .then(this.onPlanetLoaded);

    }

    render() {
        
        const { planet, load, error} = this.state;
        const errorContent = error ? <ErrorComponent /> : null;
        const loader = load ? <Loader /> : null;
        const content = (!load && !error) 
            ? <PlanetView planetProps={planet} /> : null ;

       

        return(
            <div className="RandomPlanet">
                {errorContent}
                {loader}
                {content}
            </div>
        );
    }
}

const PlanetView = (props) => {
    const {id, name, diameter, population, gravity} = planet;
    return (
        <>
            <h3>{name}</h3>
            <div className="d-flex planet_block">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet"/>
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
        </>
        
    );
}