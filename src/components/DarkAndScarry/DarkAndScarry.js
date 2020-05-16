import React from 'react';
import './DarkAndScarry.scss';

class DarkAndScarry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showJumpScare: false,
    };
  }

  componentDidMount() {
    setTimeout(() => { this.setState({ showJumpScare: true }); }, 50);
  }

  render() {
    return (
      <div className={`darkAndScarry ${this.state.showJumpScare ? 'show' : 'hide'}`} onClick={this.props.closeDarkAndScarry}>
      </div>
    );
  }
}
export default DarkAndScarry;
