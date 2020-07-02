import React from 'react';

import './DetailsInfo.css';
import ErrorTest from '../ErrorTest';
import SwapiContext from '../SwapiServiceContext';


export default class DetailsInfo extends React.Component {

    static contextType = SwapiContext;

    state = {
        item: null,
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
        
        getDetailedData(id).then((item => {
            this.setState({ item })
        }));
    }

    render() {
        if (!this.state.item) {
            return <p>please, select item</p>
        }
        const { id, name, mass, birthDate, height, diameter, population, gravity, speed, crew, hyperdrive } = this.state.item;
        
        const { category, detailList } = this.props;
        
        return (
            
            <div className="DetailsInfo">
                <h3>{name}</h3>
                <div className="d-flex info_block">
                    <img src={`https://starwars-visualguide.com/assets/img/${category}/${id}.jpg`} alt="item" />
                    <ul className="detail_info_block">
                        {detailList(mass||diameter||speed, birthDate||population||crew, height||gravity||hyperdrive)}
                    </ul>
                </div>
                <ErrorTest />
            </div>
    
        );
    }
}
