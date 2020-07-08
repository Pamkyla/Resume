import React from 'react';

import './ItemsList.css';

import Loader from '../Loader';

class ItemsList extends React.Component{
    
    state = {
        data: null
    }

    constructor(props) {
        super(props);
        const { getData } = props;
          
        getData().then((data) => {
            this.setState({
                data
            })
        });
    }
    
render() {     
            const { data } = this.state;
            const { onItemClick, renderItem } = this.props;

            if (!data) {
                return <Loader />;
            }
        
            const renderItems = (arr) => {
            
                return arr.map((item) => {
                    const text = renderItem(item);
                    return (
                        <li
                            className="Item list-group-item"
                            key={item.id}
                            onClick={() => onItemClick(item.id)}
                        >
                            {text}
                        </li>
                    );
                });
            }

            const items = renderItems(data);

            return (
                <ul className="ItemsList">
                    {items}
                </ul>
            );
        }

    
}



export default ItemsList;