import React from 'react'
import PaginationButton from './PaginationButton'

describe('<PaginationButton />', () => {
  it('shows correct aria label based on type', async () => {
    const { getByLabelText } = renderWithTheme(<PaginationButton type='next' onClick={jest.fn()} />)

    const button = getByLabelText('Go to next page')

    expect(button).toBeInTheDocument()
  })

  it('shows correct aria label when disabled', async () => {
    const { getByLabelText } = renderWithTheme(<PaginationButton type='prev' onClick={jest.fn()} isDisabled />)

    const button = getByLabelText('Go to previous page')

    expect(button).toHaveAttribute('aria-disabled')
  })
})
