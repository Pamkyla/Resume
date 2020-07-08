import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="Header d-flex">
            <h1>
                <Link to="/">Star Wars Wiki</Link>
            </h1>
            <ul className="d-flex main_nav">
                <li>
                    <Link to="/people">People</Link>
                </li>

                <li>
                    <Link to="/planets">Planets</Link>
                </li>

                <li>
                    <Link to="/ships">StarShips</Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;