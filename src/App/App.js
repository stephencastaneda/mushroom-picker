import React from 'react';
import './App.scss';

import mushroomData from '../helpers/mushroomData';
import Forest from '../components/Forest/Forest';
import Basket from '../components/Basket/Basket';

class App extends React.Component {
  state = {
    mushrooms: [],
    basket: [],
  }

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    this.setState({ mushrooms });
    const basket = mushroomData.getBasket();
    this.setState({ basket, mushrooms });
  }

  render() {
    return (
      <div className="App">
        <h1>Mushroom Picker</h1>
        <button className="btn btn-danger p-2 mb-3">Pick A Mushroom</button>
        <Forest mushrooms={this.state.mushrooms} />
        <Basket basket={this.state.basket} />
      </div>
    );
  }
}

export default App;
