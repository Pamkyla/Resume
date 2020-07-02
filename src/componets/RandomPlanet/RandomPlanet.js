import React from 'react';

import SwapiService from '../../services/SwapiService'
import './RandomPlanet.css';
import Loader from '../Loader';
import ErrorComponent from '../ErrorComponent'

export default class RandomPlanet extends React.Component {

    swapi = new SwapiService();

    state = {
        planet: {},
        load: true,
        error: false,
    }

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    onError = () => {
        this.setState({
            error: true,
            load: false,
        });
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            load: false,
        });
    }

    updatePlanet = () => {
        let id = Math.round(Math.random()*19);
        let blockList = [0,1];
        
        blockList.forEach(item => {
            if(id === item){
                id++;
            }});

        this.swapi.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    render() {
        const { planet, load, error } = this.state;

        const errorContent = error ? <ErrorComponent /> : null;
        const loader = load ? <Loader /> : null;
        const content = (!load && !error)
            ? <PlanetView planet={planet} /> : null;

        return (
            <div className="RandomPlanet">
                {errorContent}
                {loader}
                {content}
            </div>
        );
    }
}



const PlanetView = (props) => {
    const { id, name, diameter, population, gravity } = props.planet;

    return (
        <>
            <h3>{name}</h3>
            <div className="d-flex planet_block">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet" />

                <ul className="planet_info_block">
                    <li>
                        <span>diameter:</span>
                        <span>{diameter}</span>
                    </li>
                    <li>
                        <span>population:</span>
                        <span>{population}</span>
                    </li>
                    <li>
                        <span>gravity:</span>
                        <span>{gravity}</span>
                    </li>
                </ul>
            </div>
        </>

    );
}