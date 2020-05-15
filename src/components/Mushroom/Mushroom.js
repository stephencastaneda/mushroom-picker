import React from 'react';
import mushroomShape from '../../helpers/Propz/mushroomShape';

class Mushroom extends React.Component {
  static propTypes = {
    mushroom: mushroomShape.mushroomShape,
  }

  render() {
    const { mushroom } = this.props;
    return (
      <div className="mushroom col-3 s12">
        <div className="card">
          <img className="card-img-top" src={mushroom.imgUrl} alt="Mushroom Card"/>
          <div className="card-body">
          <h5 className="card-title">{mushroom.name}</h5>
          <p className="card-text"></p>
        </div>
        <div className="card-footer">{mushroom.count}</div>
        </div>
      </div>
    );
  }
}

export default Mushroom;
