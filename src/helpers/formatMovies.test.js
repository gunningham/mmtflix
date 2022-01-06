import { formatMovies } from './formatMovies'

describe('formatMovies helper', () => {
  const response = [{
    imdbID: '1123123',
    Title: 'Harry Potter',
    Year: '2002',
    Poster: 'www.image.com'
  }]

  it('correctly formats movies response', () => {
    const formattedMovies = formatMovies(response)

    expect(formattedMovies.length).toEqual(1)
    expect(formattedMovies[0].id).toEqual(response[0].imdbID)
    expect(formattedMovies[0].title).toEqual(response[0].Title)
    expect(formattedMovies[0].year).toEqual(response[0].Year)
    expect(formattedMovies[0].imageUrl).toEqual(response[0].Poster)
  })

  it('returns empty array if anything but array is passed', () => {
    const formattedMovies = formatMovies({})

    expect(formattedMovies.length).toEqual(0)
    expect(Array.isArray(formattedMovies)).toBeTruthy()
  })
})
