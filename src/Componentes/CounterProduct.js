import React, { Component } from 'react';

class CounterProduct extends Component {
    styleButtons = {
        backgroundColor: "#F1AE27",
        border : "solid 0.5px",
        borderRadius: "5px",
        width: "25px",
        height: "25px"

    }
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };

  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div>
        <button style={this.styleButtons} onClick={this.IncrementItem}>+</button>
        { this.state.show ? <label type="number"  min={1}>{ this.state.clicks }</label> : '' }
        <button style={this.styleButtons} onClick={this.DecreaseItem}>-</button>
        
      </div>
    );
  }
}

export default CounterProduct;