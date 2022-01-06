import { makeRequest } from './makeRequest'

const mockResponse = [{
  imdbID: '1123123',
  Title: 'Harry Potter',
  Year: '2002',
  Poster: 'www.image.com'
}]
const requestUrl = `http://www.omdbapi.com/?s=shrek&apikey=123`

describe('makeRequest helper', () => {
  it('calls fetch with correct params', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse)
      })
    )
    const response = await makeRequest(requestUrl, 'GET')

    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith(requestUrl, { method: 'GET' })
    expect(response).toEqual(mockResponse)
  })
})
