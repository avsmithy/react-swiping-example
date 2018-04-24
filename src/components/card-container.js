import React, { Component } from 'react'
import propTypes from 'prop-types'
import Card from './card.js'
import CardDragger from './card-dragger.js'
import './card-container.css'

class CardContainer extends Component {
  constructor (props) {
    super(props)
    this.currentCard = props.getNextCard()
    this.nextCard = props.getNextCard()
  }

  handleLike = () => {
    this.props.like(this.currentCard)
  }

  handleDislike = () => {
    this.props.dislike(this.currentCard)
  }

  render () {
    return (
      <div className='CardContainer'>
        <CardDragger {...{
          like: this.handleLike,
          dislike: this.handleDislike
        }}>
          <Card {...{
            name: this.currentCard.name,
            picture: this.currentCard.picture
          }} />
        </CardDragger>
      </div>
    )
  }
}

CardContainer.propTypes = {
  like: propTypes.func.isRequired,
  dislike: propTypes.func.isRequired,
  getNextCard: propTypes.func.isRequired
}

export default CardContainer
