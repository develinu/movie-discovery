
import React, { useState } from 'react'

import '../style/MovieList.scss'
import Loader from './Loader'
import MovieCard from './MovieCard'


const MovieList = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [movies, setMovies] = useState([])

  return (
    <div className="movie-list">
      {
        isLoading
        ? <Loader />
        : null
      }
      
      <div className="message">
        Search for the movie title!
      </div>
      <div className="movies">
        {
          movies.length > 0
          ? <MovieCard />
          : null
        }
      </div>
    </div>
  )
}

export default MovieList