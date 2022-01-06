import React from 'react'
import Loading from './Loading'

describe('<Loading />', () => {
  const { getByTestId } = renderWithTheme(<Loading />)
  const spinner = getByTestId('spinner')

  it('renders correctly', () => {
    expect(spinner).toBeInTheDocument()
  })
  it('has correct aria attribute', () => {
    expect(spinner).toHaveAttribute('aria-busy')
  })
})
