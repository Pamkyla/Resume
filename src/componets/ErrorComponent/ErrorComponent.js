import React from 'react';

import './ErrorComponent.css';

import errorIcon from './star-wars.png';

const ErrorComponent = () => {
    return (
        <div className="ErrorComponent">
            <img src={errorIcon} alt="error icon" />
            <p>Resistance will be destroyed</p>
        </div>
    );
}

export default ErrorComponent;