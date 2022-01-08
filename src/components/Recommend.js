import React, { useEffect, useState } from 'react'

import '../style/Recommend.scss'
import { getMovies } from '../data/movieApi'
import MovieCard from './MovieCard'


const Recommend = () => {

  useEffect(() => {
    getMovies()
  }, [])

  const name = ["이누", "대지", "가을", "동주"]
  const [movie, setMovie] = useState({})
  
  let loading = true

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
        {name}님이 좋아하는 영화 리스트
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