import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { PaginationButton } from '@atoms'
import { Wrap, Results, PaginationWrap } from './styles'

const Pagination = ({ totalResults = 0, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(totalResults / 10) || 1
  const isOnFirstPage = currentPage === 1
  const isOnLastPage = currentPage === totalPages

  useEffect(() => {
    setCurrentPage(1)
    onPageChange(1)
  }, [totalResults]) // reset to first page when new search occurs

  const handlePageChange = (type) => {
    if (type === 'next') {
      if (isOnLastPage) return
      setCurrentPage(currentPage + 1)
      onPageChange(currentPage + 1)
    } else {
      if (isOnFirstPage) return
      setCurrentPage(currentPage - 1)
      onPageChange(currentPage - 1)
    }
  }

  return (
    <Wrap aria-label='Pagination Navigation'>
      <Results>{totalResults} Results found</Results>
      <PaginationWrap>
        Page {currentPage} of {totalPages}
        <PaginationButton type='prev' onClick={handlePageChange} isDisabled={isOnFirstPage} />
        <PaginationButton type='next' onClick={handlePageChange} isDisabled={isOnLastPage} />
      </PaginationWrap>
    </Wrap>
  )
}

Pagination.propTypes = {
  totalResults: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
}

export default Pagination
