import { makeRequest } from '@helpers'
import { API_KEY } from '@constants'

const fetchMovieById = (movieId) => {
  return async function (dispatch) {
    dispatch(fetchMovieByIdRequest())

    const requestUrl = `http://www.omdbapi.com/?i=${movieId}&apikey=${API_KEY}`
    const response = await makeRequest(requestUrl, 'GET') || []

    if (response.Error) {
      dispatch(fetchMovieByIdFailure(response.Error))
    } else {
      dispatch(fetchMovieByIdSuccess(response))
    }
  }
}

const fetchMovieByIdRequest = () => {
  return {
    type: 'FETCH_MOVIE_BY_ID_REQUEST'
  }
}

const fetchMovieByIdSuccess = (response) => {
  return {
    type: 'FETCH_MOVIE_BY_ID_SUCCESS',
    response
  }
}

const fetchMovieByIdFailure = (error) => {
  return {
    type: 'FETCH_MOVIE_BY_ID_FAILURE',
    error
  }
}

const closeMovieModal = () => {
  return {
    type: 'CLOSE_MOVIE_MODAL'
  }
}

export default {
  fetchMovieById,
  closeMovieModal
}
