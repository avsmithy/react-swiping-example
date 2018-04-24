import React, { Component } from 'react'
import propTypes from 'prop-types'
import Card from './card.js'
import './card-container.css'

class CardContainer extends Component {
  constructor (props) {
    super(props)
    this.currentCard = props.getNextCard()
    this.nextCard = props.getNextCard()
  }

  render () {
    return (
      <div className='CardContainer'>
        <Card name={this.currentCard.name} picture={this.currentCard.picture} />
      </div>
    )
  }
}

CardContainer.propTypes = {
  getNextCard: propTypes.func.isRequired
}

export default CardContainer
