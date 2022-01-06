import { makeRequest } from '@helpers'
import { API_KEY } from '@constants'

const fetchMovies = (searchQuery, pageNumber = 1) => {
  return async function (dispatch) {
    dispatch(fetchMoviesRequest(searchQuery))

    const requestUrl = `http://www.omdbapi.com/?s=${searchQuery}&page=${pageNumber}&type=movie&apikey=${API_KEY}`
    const response = await makeRequest(requestUrl, 'GET') || []

    if (response.Error) {
      dispatch(fetchMoviesFailure(response.Error))
    } else {
      dispatch(fetchMoviesSuccess(response))
    }
  }
}

const fetchMoviesRequest = (searchQuery) => {
  return {
    type: 'FETCH_MOVIES_REQUEST',
    searchQuery
  }
}

const fetchMoviesSuccess = (response) => {
  return {
    type: 'FETCH_MOVIES_SUCCESS',
    response
  }
}

const fetchMoviesFailure = (error) => {
  return {
    type: 'FETCH_MOVIES_FAILURE',
    error
  }
}

export default {
  fetchMovies
}
