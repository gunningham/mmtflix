import React from 'react'
import Article from './Article'

const articleInfo = {
  Poster: 'www.google.com',
  Title: 'Harry Potter and the Deathly Hallows',
  Director: 'David Yates',
  Actors: 'Ralph Fiennes, Michael Gambon, Alan Rickman, Daniel Radcliffe',
  Genre: 'Adventure, Drama, Fantasy, Mystery',
  Plot: 'Harry, Ron, and Hermione search for Voldemort\'s remaining Horcruxes.'
}

describe('<Article />', () => {
  it('renders image with alt text', async () => {
    const { getByAltText } = renderWithTheme(<Article articleInfo={articleInfo} />)

    const image = getByAltText(articleInfo.Title)

    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('alt')
  })
})
