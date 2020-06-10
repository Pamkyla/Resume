import React from 'react';

import './ErrorComponent.css';

import errorIcon from 'E:\\img\\miy.jpg';

const ErrorComponent = () => {
    return (
        <div className="ErrorComponent">
            <img src={errorIcon} alt="error icon" />
            <p>Auf</p>
            <p>Meow</p>
        </div>
    );
}

export default ErrorComponent;