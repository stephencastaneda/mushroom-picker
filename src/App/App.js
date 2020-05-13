import React from 'react';
import './App.scss';

import mushroomData from '../helpers/mushroomData';
import Forest from '../components/Forest/Forest';

class App extends React.Component {
  state = {
    mushrooms: [],
  }

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    this.setState({ mushrooms });
  }

  render() {
    return (
      <div className="App">
        <h1>Mushroom Picker</h1>
        <button className="btn btn-danger p-2 mb-3">Pick A Mushroom</button>
        <Forest mushrooms={this.state.mushrooms} />
      </div>
    );
  }
}

export default App;
