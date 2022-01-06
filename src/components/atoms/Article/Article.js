import React from 'react'
import PropTypes from 'prop-types'
import { Wrap, Heading, Image, Label, Info, Description } from './styles'

const Article = ({ articleInfo }) => (
  <Wrap>
    <Image src={articleInfo.Poster} alt={articleInfo.Title} />
    <div>
      <Heading>{articleInfo.Title}</Heading>
      <Info><Label>Director:</Label> {articleInfo.Director}</Info>
      <Info><Label>Cast:</Label> {articleInfo.Actors}</Info>
      <Info><Label>Genre:</Label> {articleInfo.Genre}</Info>
      <Description>{articleInfo.Plot}</Description>
    </div>
  </Wrap>
)

Article.propTypes = {
  articleInfo: PropTypes.shape({
    Poster: PropTypes.string,
    Title: PropTypes.string,
    Director: PropTypes.string,
    Actors: PropTypes.string,
    Genre: PropTypes.string,
    Plot: PropTypes.string
  }).isRequired
}

export default Article
