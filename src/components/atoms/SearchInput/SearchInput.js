import React, { useState, memo } from 'react'
import PropTypes from 'prop-types'
import SearchIcon from '@resources/svgs/search.svg'
import { ENTER_BUTTON_KEYCODE } from '@constants'
import { Wrap, Input, Button } from './styles'

const SearchInput = ({ onSearch, placeHolder = 'Search...' }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSearchOnKeyDown = ({ keyCode }) => {
    if (keyCode !== ENTER_BUTTON_KEYCODE) return

    onSearch(inputValue)
  }

  return (
    <Wrap>
      <Input
        onChange={({ target: { value } }) => setInputValue(value)}
        onKeyDown={handleSearchOnKeyDown}
        value={inputValue}
        type='search'
        role='search'
        placeholder={placeHolder}
      />
      <Button onClick={() => onSearch(inputValue)}>
        <SearchIcon />
      </Button>
    </Wrap>
  )
}

SearchInput.propTypes = {
  onSearch: PropTypes.func.isRequired,
  placeHolder: PropTypes.string
}

export default memo(SearchInput)
