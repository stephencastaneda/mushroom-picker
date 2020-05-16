import React from 'react';
import './Alert.scss';

const Alert = (props) => (
    <div className={`alert ${props.showAlert === 'youwon' ? 'show' : 'hide'}`} onClick={props.closeAlert}>
      YOU WON THE GAME
    </div>
);

export default Alert;
