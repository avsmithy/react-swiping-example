import React, { Component } from 'react'
import propTypes from 'prop-types'
import Card from './card.js'
import CardDragger from './card-dragger.js'
import './card-container.css'

class CardContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentCard: props.getNextCard(),
      nextCard: props.getNextCard(),
      transition: false
    }
  }

  componentWillUnmount = () => {
    window.clearTimeout(this.timeout)
  }

  showNextCard = () => {
    this.timeout = window.setTimeout(this.switchCard, 500)
    this.setState({
      transition: true
    })
  }

  switchCard = () => {
    this.setState({
      currentCard: this.state.nextCard,
      nextCard: this.props.getNextCard(),
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
        <Card {...{
          className: 'CardContainer-nextCard',
          name: this.state.nextCard.name,
          picture: this.state.nextCard.picture
        }} />
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
