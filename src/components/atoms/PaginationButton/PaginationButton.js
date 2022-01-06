import React from 'react'
import PropTypes from 'prop-types'
import NextPageIcon from '@resources/svgs/forward-arrow.svg'
import PrevPageIcon from '@resources/svgs/back-arrow.svg'
import { Wrap } from './styles'

const PaginationButton = ({ type, onClick, isDisabled }) => (
  <Wrap
    onClick={() => onClick(type)}
    aria-label={`Go to ${type === 'next' ? 'next' : 'previous'} page`}
    aria-disabled={isDisabled}
    isDisabled={isDisabled}
    tabIndex={isDisabled ? -1 : 0}
  >
    {type === 'next'
      ? <NextPageIcon />
      : <PrevPageIcon />
    }
  </Wrap>
)

PaginationButton.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool
}

export default PaginationButton
