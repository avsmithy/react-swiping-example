import React, { Component } from 'react'
import Draggable from 'react-draggable'
import propTypes from 'prop-types'
import './card-dragger.css'

const ROTATION_FACTOR = 0.08
const DRAG_NO_ACTION_AREA = 65

class CardDragger extends Component {
  state = {
    position: null,
    rotation: 0,
    showLikeTooltip: false,
    showDislikeTooltip: false
  }

  handleDrag = (_, { x }) => {
    this.setState({
      rotation: x * ROTATION_FACTOR,
      showLikeTooltip: x > DRAG_NO_ACTION_AREA,
      showDislikeTooltip: x < -DRAG_NO_ACTION_AREA
    })
  }

  handleStop = (_, { x }) => {
    if (x > DRAG_NO_ACTION_AREA) {
      this.props.like()
    } else if (x < -DRAG_NO_ACTION_AREA) {
      this.props.dislike()
    } else {
      this.setState({
        position: { x: 0, y: 0 },
        rotation: 0
      })
    }
  }

  render () {
    return (
      <Draggable {...{
        axis: 'x',
        bounds: 'parent',
        onDrag: this.handleDrag,
        onStop: this.handleStop,
        position: this.state.position
      }}>
        <div>
          <div {...{
            className: `CardDragger-wrapper ${this.props.className}`,
            style: {
              transform: `rotate(${this.state.rotation}deg)`
            }
          }}>
            {this.state.showLikeTooltip && (
              <div className='CardDragger-like'>Muah</div>
            )}
            {this.state.showDislikeTooltip && (
              <div className='CardDragger-dislike'>Nah</div>
            )}
            {this.props.children}
          </div>
        </div>
      </Draggable>
    )
  }
}

CardDragger.propTypes = {
  dislike: propTypes.func.isRequired,
  like: propTypes.func.isRequired,
  children: propTypes.node.isRequired
}

export default CardDragger
