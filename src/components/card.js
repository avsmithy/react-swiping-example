import React, { Component } from 'react'
import propTypes from 'prop-types'
import './card.css'

class Card extends Component {
  render () {
    return (
      <div className='Card'>
        <div {...{
          className: 'Card-picture',
          style: {
            backgroundImage: `url(${this.props.picture})`
          }
        }} />
        <div className='Card-name'>{this.props.name}</div>
      </div>
    )
  }
}

Card.propTypes = {
  name: propTypes.string.isRequired,
  picture: propTypes.string.isRequired
}

export default Card
