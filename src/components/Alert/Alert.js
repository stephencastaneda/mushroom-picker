import React from 'react';
import './Alert.scss';

const Alert = (props) => {
  console.log('props', props);

  return (
    <div className={`alert ${props.showAlert ? 'show' : 'hide'}`} onClick={props.closeAlert}>
      YOU WON THE GAME
    </div>
  );
};
export default Alert;
