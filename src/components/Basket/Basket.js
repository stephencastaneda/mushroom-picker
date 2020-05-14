import React from 'react';

import Mushroom from '../Mushroom/Mushroom';

class Basket extends React.Component {
  render() {
    const { basket } = this.props;
    const makeBasket = basket.map((mushroom) => (
      <Mushroom key={mushroom.id} mushroom={mushroom}/>
    ));

    return (
      <div className="Basket">
        <div className="Basket-title">
          <h2>My Basket</h2>
        </div>
        <div className="Basket-container d-flex flex-wrap">
          {makeBasket}
        </div>
       </div>
    );
  }
}

export default Basket;
