import React from 'react';
import './App.scss';


import mushroomData from '../helpers/mushroomData';
import Forest from '../components/Forest/Forest';
import Basket from '../components/Basket/Basket';
import mushroomShape from '../helpers/Propz/mushroomShape';

class App extends React.Component {
  state = {
    mushrooms: [],
    basket: [],
    mushroom: mushroomShape.mushroomShape,
  }

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    this.setState({ mushrooms });
  }

  pickAMushroom = (mushroomId) => {
    mushroomData.pickAMushroom(mushroomId);
    const basket = mushroomData.getBasket();
    this.setState({ basket });
  }

  pickMushroomEvent = (e) => {
    e.preventDefault();
    const pickAMushroom = this.pickAMushroom();
    // const { mushroom } = this.state.mushroom;
    pickAMushroom(mushroom.id);
  }

  render() {
    return (
      <div className="App">
        <h1>Mushroom Picker</h1>
        <button className="btn btn-danger p-2 mb-3" onClick={this.pickMushroomEvent}>Pick A Mushroom</button>
        <Forest mushrooms={this.state.mushrooms}/>
        <Basket basket={this.state.basket} />
      </div>
    );
  }
}

export default App;
