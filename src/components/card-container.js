import React, { Component } from 'react'
import propTypes from 'prop-types'
import Card from './card.js'
import CardDragger from './card-dragger.js'
import './card-container.css'

class CardContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentCard: props.next(),
      nextCard: props.next(),
      transition: false
    }
  }

  componentWillUnmount = () => {
    window.clearTimeout(this.timeout)
  }

  showNextCard = () => {
    // NOTE: I attempted to use react-transition-group but couldn't
    // get it to work with dragging
    this.timeout = window.setTimeout(this.switchCard, 300)
    this.setState({
      transition: true
    })
  }

  switchCard = () => {
    this.setState({
      currentCard: this.state.nextCard,
      nextCard: this.props.next(),
      transition: false
    })
  }

  handleLike = () => {
    this.props.like(this.state.currentCard)
    this.showNextCard()
  }

  handleDislike = () => {
    this.props.dislike(this.state.currentCard)
    this.showNextCard()
  }

  render () {
    if (!this.state.currentCard) {
      return (
        <div className='CardContainer-noCards'>
          I think we're done for the day pal...
        </div>
      )
    }

    const transitionClass = `CardContainer-transition ${this.state.transition && 'CardContainer-transitionActive'}`

    return (
      <div className='CardContainer'>
        <CardDragger {...{
          className: transitionClass,
          key: this.state.currentCard.name,
          like: this.handleLike,
          dislike: this.handleDislike
        }}>
          <Card {...{
            name: this.state.currentCard.name,
            picture: this.state.currentCard.picture
          }} />
        </CardDragger>
        {this.state.nextCard && (
          <Card {...{
            className: 'CardContainer-nextCard',
            name: this.state.nextCard.name,
            picture: this.state.nextCard.picture
          }} />
        )}
      </div>
    )
  }
}

CardContainer.propTypes = {
  like: propTypes.func.isRequired,
  dislike: propTypes.func.isRequired,
  next: propTypes.func.isRequired
}

export default CardContainer
