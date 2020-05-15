import React from 'react';

import Mushroom from '../Mushroom/Mushroom';

class Basket extends React.Component {
  render() {
    const { basket } = this.props;
    // store 1 copy of every mushroom type
    const uniqueBasket = {};
    basket.map((mushroom) => {
      if (!uniqueBasket[mushroom.id]) {
        // iterate over the mushrooms and add them to the unique basket
        uniqueBasket[mushroom.id] = { ...mushroom, count: 1 };
      } else {
        // increment mushrooms that already exist in the basket
        uniqueBasket[mushroom.id].count += 1;
      }
    });
    // convert mushroom count into an array that we pass to function
    const basketToDisplay = [];
    for (const key in uniqueBasket) {
      if ({}.hasOwnProperty.call(uniqueBasket, key)) {
        basketToDisplay.push(uniqueBasket[key]);
      }
    }
    console.log('unique basket', uniqueBasket);
    const makeBasket = basketToDisplay.map((mushroom) => (
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
