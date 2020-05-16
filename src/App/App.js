import React from 'react';
import './App.scss';


import DarkAndScarry from '../components/DarkAndScarry/DarkAndScarry';
import mushroomData from '../helpers/mushroomData';
import Forest from '../components/Forest/Forest';
import Basket from '../components/Basket/Basket';
import mushroomShape from '../helpers/Propz/mushroomShape';
import Alert from '../components/Alert/Alert';

class App extends React.Component {
  state = {
    mushrooms: [],
    basket: [],
    mushroom: mushroomShape.mushroomShape,
    showAlert: false,
    showDarkAndScary: false,
  }

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    this.setState({ mushrooms });
    const basket = mushroomData.getBasket();
    this.setState({ basket });
  }

  pickAMushroom = (e) => {
    e.preventDefault();
    const wonTheGame = mushroomData.pickAMushroom();
    // mushroomData.pickAMushroom();
    if (wonTheGame === 'fatality') {
      this.setState({ showDarkAndScary: true });
    } else {
      const basket = mushroomData.getBasket();
      this.setState({ basket, showAlert: wonTheGame });
    }
  }

  closeAlert = () => {
    this.setState({ showAlert: false });
  }

  closeDarkAndScarry = () => {
    this.setState({ showDarkAndScary: false });
  }

  render() {
    return (
      <div className="App">
        <h1>Mushroom Picker</h1>
        <button className="btn btn-danger p-2 mb-3" onClick={this.pickAMushroom}>Pick A Mushroom</button>
        <Forest mushrooms={this.state.mushrooms}/>
        <Basket basket={this.state.basket} />
        <Alert showAlert={this.state.showAlert} closeAlert={this.closeAlert}/>
        {this.state.showDarkAndScary && <DarkAndScarry closeDarkAndScarry={this.closeDarkAndScarry} />}
      </div>
    );
  }
}

export default App;
