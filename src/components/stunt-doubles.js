import React, { Component } from 'react'
import propTypes from 'prop-types'
import CardContainer from './card-container.js'
import './stunt-doubles.css'

class StuntDoubles extends Component {
  render () {
    return (
      <div className='StuntDoubles'>
        <CardContainer getNextCard={this.props.service.next} />
      </div>
    )
  }
}

StuntDoubles.propTypes = {
  service: propTypes.shape({
    next: propTypes.func.isRequired
  }).isRequired
}

export default StuntDoubles
