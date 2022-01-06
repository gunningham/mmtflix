import React from 'react'
import { fireEvent } from '@testing-library/react'
import SearchInput from './SearchInput'

describe('<SearchInput />', () => {
  const onSearch = jest.fn()
  const { getByPlaceholderText } = renderWithTheme(<SearchInput placeHolder='search' onSearch={onSearch} />)
  const input = getByPlaceholderText('search')

  it('renders correctly', () => {
    expect(input).toBeInTheDocument()
  })

  it('has the correct value on input change', () => {
    fireEvent.change(input, { target: { value: 'harry potter' } })

    expect(input).toHaveValue('harry potter')
  })
})
