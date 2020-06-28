import React from 'react';

import ItemsList from '../ItemsList';
import DetailsInfo from '../DetailsInfo';
import './PeoplePage.css';
import ErrorComponent from '../ErrorComponent';
import SwapiService from '../../services/SwapiService';
import Row from '../Row';

export default class PeoplePage extends React.Component {

    swapi = new SwapiService();

    state = {
        selectedPerson: null,
        error: false,
    }

    componentDidCatch() {
        this.setState({ error: true });
    }

    onPersonSelect = (id) => {
        this.setState({
            selectedPerson: id
        });
    }

    detailPeopleList = (mass, birthDate, gender) => {

        return (
            <>
                <li>
                    <span>mass</span>
                    <span>{mass}</span>
                </li>
                <li>
                    <span>birth date</span>
                    <span>{birthDate}</span>
                </li>
                <li>
                    <span>gender</span>
                    <span>{gender}</span>
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
                getData={this.swapi.getAllPeople}
                onItemClick={this.onPersonSelect}
                renderItem={(item) =>
                    `${item.name}
                        (${item.gender}, ${item.mass}kg)`
                }
            />
        );

        const detailsInfo = (
            <DetailsInfo
                category='characters'
                getDetailedData={this.swapi.getPerson}
                id={this.state.selectedPerson}
                detailList={this.detailPeopleList}
            />
        );

        return (
            <div className="PeoplePage">
                <Row left={itemsList} right={detailsInfo} />
            </div>
        )
    }
}