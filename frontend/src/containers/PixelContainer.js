import React, { Component } from 'react'
import { connect } from 'react-redux'

import { changePixelColor } from '../actions/canvas'
import Pixel from '../components/Pixel'


class CanvasContainer extends Component {

  handleClick(x, y) {
    this.props.changePixelColor(x, y);
  }

  render() {
    return (
      <Pixel
        color={this.props.color}
        handleClick={() => this.handleClick(this.props.x, this.props.y)}
        size={this.props.size} />
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  const { x, y } = ownProps;
  return {
    color: state.canvas.content[state.canvas.size_x * y + x],
    size: state.canvas.size_y
  };
};

export default connect(mapStateToProps, { changePixelColor })(CanvasContainer);
