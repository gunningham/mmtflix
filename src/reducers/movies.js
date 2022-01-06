import { formatMovies } from '@helpers'

const initialState = {
  isLoading: false,
  movies: [],
  error: null,
  totalResults: 0,
  searchQuery: ''
}

const movies = (state = initialState, action) => {
  switch (action.type) {
    // FETCH
    case 'FETCH_MOVIES_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: null,
        searchQuery: action.searchQuery
      }
    case 'FETCH_MOVIES_SUCCESS':
      return {
        ...state,
        isLoading: false,
        movies: formatMovies(action.response.Search),
        totalResults: parseInt(action.response.totalResults)
      }
    case 'FETCH_MOVIES_FAILURE':
      return {
        ...state,
        isLoading: false,
        totalResults: 0,
        error: action.error
      }

    case 'RESET_MOVIES':
      return {
        ...initialState
      }
    default:
      return state
  }
}

export default movies
