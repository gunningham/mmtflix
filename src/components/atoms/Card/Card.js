import React from 'react'
import PropTypes from 'prop-types'
import { Wrap, BackgroundImage, Title } from './styles'

const Card = ({ id, imageUrl, title, year, onCardClick }) => (
  <Wrap data-testid='card'>
    <BackgroundImage
      url={imageUrl}
      role='img'
      aria-label={title}
      onClick={() => onCardClick(id)}
    />
    <Title>{title}</Title>
    {year}
  </Wrap>
)

Card.propTypes = {
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.string,
  onCardClick: PropTypes.func.isRequired
}

export default Card
