import React from 'react'
import Card from './Card'

const props = {
  id: '13123213',
  imageUrl: 'www.google.com',
  title: 'Harry Potter',
  year: '2002',
  onCardClick: jest.fn()
}

describe('<Card />', () => {
  it('renders correctly', async () => {
    const { getByTestId } = renderWithTheme(<Card {...props} />)

    const card = getByTestId('card')

    expect(card).toBeInTheDocument()
  })

  it('poster has correct role', async () => {
    const { getByRole } = renderWithTheme(<Card {...props} />)

    const poster = getByRole('img')

    expect(poster).toBeInTheDocument()
    expect(poster).toHaveAttribute('aria-label')
  })
})
