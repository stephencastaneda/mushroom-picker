import React from 'react';

import Mushroom from '../Mushroom/Mushroom';

class Basket extends React.Component {
  render() {
    const { basket } = this.props;
    const makeBasket = basket.map((mushroom) => (
      <Mushroom key={mushroom.id} mushroom={mushroom}/>
    ));

    return (
      <div className="Basket d-flex flex-wrap text-center">
        <h2>My Basket</h2>
        {makeBasket}
      </div>
    );
  }
}

export default Basket;
