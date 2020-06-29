import React from 'react';

import ItemsList from '../ItemsList';
import DetailsInfo from '../DetailsInfo';
import './StarshipPage.css';
import ErrorComponent from '../ErrorComponent';
import SwapiService from '../../services/SwapiService';
import Row from '../Row';


export default class StarshipPage extends React.Component {

    swapi = new SwapiService();
    
    state = {
        selectedShip: null,
        error: false,
    }

    componentDidCatch() {
        this.setState({ error: true });
        
        
    }

    onShipSelect = (id) => {
        this.setState({
            selectedShip: id
        });
    }

    detailShipList = (cost, crew, hyperdrive) => {

        return (
            <>
                <li>
                    <span>cost in credits</span>
                    <span>{cost}</span>
                </li>
                <li>
                    <span>crew</span>
                    <span>{crew}</span>
                </li>
                <li>
                    <span>hyperdrive rating</span>
                    <span>{hyperdrive}</span>
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
                getData={this.swapi.getAllShips}
                onItemClick={this.onShipSelect}
                renderItem={(item) =>
                    `${item.name}
                        (${item.model})`
                }
            />
        );

        const detailsInfo = (
            <DetailsInfo
                category='starships'
                getDetailedData={this.swapi.getShip}
                id={this.state.selectedShip}
                detailList={this.detailShipList}
            />
        );

        return (
            <div className="StarshipsPage">
                <Row left={itemsList} right={detailsInfo} />
            </div>
        )
    }
}