import React from 'react'
import propTypes from 'prop-types'
import './card.css'

const Card = props => {
  return (
    <div className={`Card ${props.className}`}>
      <div {...{
        className: 'Card-picture',
        style: {
          backgroundImage: `url(${props.picture})`
        }
      }} />
      <div className='Card-name'>{props.name}</div>
    </div>
  )
}

Card.propTypes = {
  name: propTypes.string.isRequired,
  picture: propTypes.string.isRequired
}

export default Card
