import React from 'react';

import './ErrorComponent.css';

import errorIcon from './droid.svg';

const ErrorComponent = () => {
    return (
        <div className="ErrorComponent">
            <img src={errorIcon} alt="error icon" />
            <p>Something's gone wrong. Best Empire’s techniques are already working on this problem</p>
            
        </div>
    );
}

export default ErrorComponent;