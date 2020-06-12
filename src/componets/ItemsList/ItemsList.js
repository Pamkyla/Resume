import React from 'react';

import './ItemsList.css';
import Loader from '../Loader';

export default class ItemsList extends React.Component {

    state = {
        item: null
    }

    componentDidMount() {
        this.props.getData().then((item) => {
            this.setState({
                item
            })
        });
    }

    componentDidUpdate// сразу после обновления объекта (новое св-во или вызвал setState).Первая инициализация компонента не считается обновлением

    renderItems(arr) {
        return arr.map((item) => {
            const text = this.props.renderItem(item)
            return (
                <li
                    className="Item list-group-item"
                    key={item.id}
                    onClick={() => this.props.onItemClick(item.id)}
                >
                    {text}
                </li>
            )
        });
    }

    render() {

        const { item } = this.state;

        if (!item) {
            return <Loader />;
        }

        const items = this.renderItems(item);

        return (
            <ul className="ItemsList">
                {items}
            </ul>
        );
    }

}