const initialState = {
  isFetchingMovie: false,
  showMovieModal: false,
  movie: {},
  error: null
}

const movie = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIE_BY_ID_REQUEST':
      return {
        ...state,
        isFetchingMovie: true,
        showMovieModal: true,
        error: null
      }
    case 'FETCH_MOVIE_BY_ID_SUCCESS':
      return {
        ...state,
        isFetchingMovie: false,
        movie: action.response
      }
    case 'FETCH_MOVIE_BY_ID_FAILURE':
      return {
        ...state,
        isFetchingMovie: false,
        error: action.error
      }
    case 'CLOSE_MOVIE_MODAL':
      return {
        ...state,
        showMovieModal: false
      }
    default:
      return state
  }
}

export default movie
