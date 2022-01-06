import React from 'react'
import PropTypes from 'prop-types'
import { Card, Loading } from '@atoms'
import { ListWrap } from './styles'

const CardsList = ({ items = [], isLoading, onCardClick }) => {
  if (isLoading) return <Loading />
  return (
    <ListWrap>
      {items.map(item => (
        <Card key={item.id} {...item} onCardClick={onCardClick} />
      ))}
    </ListWrap>
  )
}

CardsList.propTypes = {
  items: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  onCardClick: PropTypes.func.isRequired
}

export default CardsList
