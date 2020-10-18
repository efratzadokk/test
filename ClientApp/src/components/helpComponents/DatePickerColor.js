
import React from 'react';
import { HuePicker } from 'react-color';
import '../../Css/Nav.css'
import '../../Css/helpComponentCss/DatePickerColor.css'

class Color extends React.Component {
  state = {
    background: '#fff',
  };

  handleChangeComplete = (color) => {
    this.props.onchangeColor(color)
  };

  handleChange = (color) => {
    this.setState({ background: color.hex });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 d-flex align-items-center">
            <HuePicker
              // direction={vertical}
              className="HuePicker"
              color={this.state.background}
              onChange={(color) => this.handleChangeComplete(color.hex)}
              onChangeComplete={this.handleChange}
              // colors={['#fff','#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#dce775', '#ff8a65', '#ba68c8']}
            ></HuePicker>
          </div>
          
            <input
              type="text"
              className="input col-4" placeholder={this.state.background ? this.state.background : ""}
              value={this.props.color ? this.props.color : ""}
              onChange={(e) => this.handleChangeComplete(e.target.value)}
            ></input>
          

      </div>
      </div >

    );
  }
}

export default Color;