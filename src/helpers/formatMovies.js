export const formatMovies = (movies) => {
  if (!Array.isArray(movies)) return []

  return movies.map(movie => {
    return {
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      imageUrl: movie.Poster
    }
  })
}
