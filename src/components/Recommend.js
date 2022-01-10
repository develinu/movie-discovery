import React, { useEffect, useState } from 'react'

import '../style/Recommend.scss'
import MovieCard from './MovieCard'
import Loader from './Loader'
import { getLikeMovies, getMovie } from '../data/movieApi'


const Recommend = () => {

  const users = ["이누", "대지", "가을", "동주"] 

  return (
    <>
    {
      users.map((u, idx) => <RecommendBelt key={idx} userId={u} />)
    }
    </>
  )
}

const RecommendBelt = ({ userId }) => {

  const displayMovieCardCount = 5
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getLikeMovie()
  }, [])
  
  const getLikeMovie = async () => {    
    const _likeMovies = await getLikeMovies(userId)

    const _movies = _likeMovies.data?.movies
    if ( _movies && _movies.length > 0 ) {
      const promises = _movies.map(async m => {
        let _movie = await getMovieDetail(m)
        return _movie.data ? _movie.data : {}
      })
      let _result = await Promise.all(promises)
      setMovies(_result)
    }

    setLoading(false)
  }

  const getMovieDetail = async (movieId) => {
    return await getMovie(movieId)
  }

  return (
    <div className="recommend-belt">
      {
        loading
        ? <Loader />
        : 
        <>
        <div className="title">
          {userId}님이 좋아하는 영화 리스트
        </div>

        <div className="recommend-list">
          {
            movies
            ? movies.map(movie => {
              return <MovieCard key={movie.imdbID} movie={movie}/>
            })
            : null
          }
          {
            Array.from(Array(displayMovieCardCount - movies.length)).map((e, idx) => {
              return <MovieCard key={idx} empty />
            })
          }
        </div>
        </>
      }
    </div>
  )
}

export default Recommend