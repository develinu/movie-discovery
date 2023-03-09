import React, { useEffect, useState } from 'react'

import '../style/Recommend.scss'
import { getMovies } from '../data/movieApi'
import MovieCard from './MovieCard'


const Recommend = () => {
  useEffect(() => {
    getMovies()
  }, [])

  const name = ["devinu"]

  return (
    <>
    {
      name.map(n => <RecommendBelt name={n} />)
    }
    </>
  )
}

const RecommendBelt = ({ name }) => {
  return (
    <div className="recommend-belt">
      <div className="title">
        {name}님이 좋아 할만한 영화 리스트
      </div>

      <div className="recommend-list">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
      </div>
    </div>
  )
}

export default Recommend