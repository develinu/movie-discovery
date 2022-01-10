
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import '../style/MovieList.scss'
import Loader from './Loader'
import MovieCard from './MovieCard'


const MovieList = () => {
  const { searchReducer, moviesReducer } = useSelector(state => state)

  const getDefaultComponent = () => {
    if (searchReducer) {
      return <Loader />
    } else if (!searchReducer && moviesReducer.length === 0) {
      return (
        <div className="message">
          Search for the movie title!
        </div>
      )
    }

    return null
  }

  return (
    <div className="movie-list">
      {
        getDefaultComponent()
      }
      
      
      <div className="movies">
        {
          moviesReducer.length > 0
          ? moviesReducer.map(movie => {
            return <MovieCard key={movie.imdbID} movie={movie} />
          })
          : null
        }
      </div>
    </div>
  )
}

export default MovieList