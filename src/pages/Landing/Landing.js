import React, { useEffect } from 'react'
import { moviesActions, movieActions } from '@actions'
import { useSelector, useDispatch } from 'react-redux'
import { Article } from '@atoms'
import { Layout } from '@organisms'
import { CardsList, Pagination, Modal } from '@molecules'

const Landing = () => {
  const dispatch = useDispatch()
  const { movies, totalResults, isLoading, error, searchQuery } = useSelector(state => state.movies)
  const { movie, showMovieModal, isFetchingMovie } = useSelector(state => state.movie)

  const fetchMovies = async () => {
    await dispatch(moviesActions.fetchMovies('harry potter'))
  }

  useEffect(() => {
    fetchMovies() // Will fetch Harry Potter movies on first load
  }, [])

  const handleSearchMovies = async (searchQuery) => {
    await dispatch(moviesActions.fetchMovies(searchQuery))
  }

  const handlePageChange = async (pageNumber) => {
    await dispatch(moviesActions.fetchMovies(searchQuery, pageNumber))
  }

  const handleFetchMovie = async (id) => {
    await dispatch(movieActions.fetchMovieById(id))
  }

  return (
    <Layout onSearch={handleSearchMovies}>
      <Pagination totalResults={totalResults} onPageChange={handlePageChange} />
      {error
        ? <p>{error}</p>
        : <CardsList items={movies} isLoading={isLoading} onCardClick={handleFetchMovie} />
      }
      <Modal
        isActive={showMovieModal}
        isLoading={isFetchingMovie}
        onClose={() => dispatch(movieActions.closeMovieModal())}
      >
        <Article articleInfo={movie} />
      </Modal>
    </Layout>
  )
}

export default Landing
