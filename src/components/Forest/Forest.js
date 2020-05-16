import React from 'react';
import './Forest.scss';

import Mushroom from '../Mushroom/Mushroom';

class Forest extends React.Component {
  render() {
    const { mushrooms } = this.props;
    const makeMushrooms = mushrooms.map((mushroom) => (
      <Mushroom key={mushroom.id} mushroom={mushroom}/>
    ));

    return (
    <div className="Forest forest-container d-flex flex-wrap row">
     {makeMushrooms}
    </div>
    );
  }
}
export default Forest;
