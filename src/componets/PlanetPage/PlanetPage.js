import React from 'react';

import ItemsList from '../ItemsList';
import DetailsInfo from '../DetailsInfo';
import './PlanetPage.css';
import ErrorComponent from '../ErrorComponent';
import SwapiService from '../../services/SwapiService';
import Row from '../Row';


export default class PlanetPage extends React.Component {

    swapi = new SwapiService();

    state = {
        selectedPlanet: null,
        error: false,
    }

    componentDidCatch() {
        this.setState({ error: true });
        
        
    }

    onPlanetSelect = (id) => {
        this.setState({
            selectedPlanet: id
        });
    }

    detailPlanetList = (diameter, population, gravity) => {

        return (
            <>
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
            </>
        )
    }

    render() {
        if (this.state.error) {
            return <ErrorComponent />
        }

        const itemsList = (
            <ItemsList
                getData={this.swapi.getAllPlanet}
                onItemClick={this.onPlanetSelect}
                renderItem={(item) =>
                    `${item.name}
                        (${item.climate})`
                }
            />
        );

        const detailsInfo = (
            <DetailsInfo
                category='planets'
                getDetailedData={this.swapi.getPlanet}
                id={this.state.selectedPlanet}
                detailList={this.detailPlanetList}
            />
        );

        return (
            <div className="PlanetPage">
                <Row left={itemsList} right={detailsInfo} />
            </div>
        )
    }
}