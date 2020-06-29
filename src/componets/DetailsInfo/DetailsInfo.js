import React from 'react';

import './DetailsInfo.css';
import ErrorTest from '../ErrorTest';
import SwapiContext from '../SwapiServiceContext';


export default class DetailsInfo extends React.Component {

    static contextType = SwapiContext;

    state = {
        person: null,
    }
    
    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.id !== prevProps.id) {
            this.updateItem();
        }

    }

    updateItem() {
        const { id, getDetailedData} = this.props;
        if (!id) {
            return;
        }
        
        getDetailedData(id).then((person => {
            this.setState({ person })
        }));
    }

    render() {
        if (!this.state.person) {
            return <p>please, select person</p>
        }
        const { id, name, mass, birthDate, gender, diameter, population, gravity, cost, crew, hyperdrive } = this.state.person;
        
        const { category, detailList } = this.props;
        
        return (
            
            <div className="DetailsInfo">
                <h3>{name}</h3>
                <div className="d-flex info_block">
                    <img src={`https://starwars-visualguide.com/assets/img/${category}/${id}.jpg`} alt="person" />
                    <ul className="detail_info_block">
                        {detailList(mass||diameter||cost, birthDate||population||crew, gender||gravity||hyperdrive)}
                    </ul>
                </div>
                <ErrorTest />
            </div>
    
        );
    }
}
