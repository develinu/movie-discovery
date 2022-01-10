import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import '../style/MovieDetail.scss'
import Loader from './Loader'
import { userId, getMovie, getLikeMovies, addLikeMovie } from '../data/movieApi'


const MovieDetail = () => {

  const [movie, setMovie] = useState({})
  const [loading, setLoading] = useState(true)
  const [imageLoading, setImageLoading] = useState(true)
  const [like, setLike] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    getMovieDetail()
    getLikeMovie()
  }, [])

  const getMovieDetail = async () => {
    const _movie = await getMovie(id)
    setMovie(_movie?.data)
    setLoading(false)
  }

  const getLikeMovie = async () => {
    const _likeMovies = await getLikeMovies(userId)
    if (_likeMovies.data?.movies?.includes(id)) {
      setLike(true)
    }
  }

  const onLikeMovie = async () => {
    await addLikeMovie(userId, id)
  }

  const onLikeHandle = async () => {
    if (like) {
      return
    }

    await onLikeMovie()
    await getLikeMovie()
  }

  function requestDifferentSizeImage(url, size=700) {
    if (!url) {
      return ""
    }
    const src = url.replace("SX300", `SX${size}`)
    const img = new Image()
    img.src = src
    img.onload = () => {
      setImageLoading(false)
    }
    return src
  }

  return (
    <div className="container">
      {
        loading        
        ?  // 로딩중인 경우
        <div className="skeleton-loader">
          <div className="poster">

          </div>
          <div className="skeletons">
            <div className="skeleton title"></div>
            <div className="skeleton specs"></div>
            <div className="skeleton plot"></div>
            <div className="skeleton etc"></div>
            <div className="skeleton etc"></div>
            <div className="skeleton etc"></div>
          </div>
          <Loader absolute />
        </div>
        
        :  // 로딩이 끝난 경우
        <div className="movie-details">
          <div 
            className="poster"
            style={{ backgroundImage: `url(${requestDifferentSizeImage(movie?.Poster)})` }}>
            {
              imageLoading
              ? <Loader scale=".7" absolute />
              : null
            }
            <div className='like noselect' onClick={onLikeHandle}>
              <span>{like ? "♥" : "♡" }</span>
            </div>
          </div>

          <div className="specs">

            <div className="title">
              {movie.Title}
            </div>

            <div className="labels">
              <span>
                {movie.Released}
              </span>
              <span className="dot">·</span>
              <span>
                {movie.Runtime}
              </span>
              <span className="dot">·</span>
              <span>
                {movie.Contry}
              </span>
            </div>
            <div className="plot">
              {movie.Plot}
            </div>
            <div className="ratings">
              <h3>Ratings</h3>
              <div className="rating-wrap">
                {
                  movie.Ratings
                  ? movie.Ratings.map((rating, idx) => {
                    return (
                      <div 
                        key={idx}
                        title={rating.Source}
                        className="rating">
                        <img 
                          src={`/assets/${rating.Source}.png`}
                          alt={rating.Source}
                          height="30" />
                        <span>
                          {rating.Value}
                        </span>
                      </div>
                    )
                  })
                  : null
                }
              </div>
            </div>
            <div>
              <h3>Actors</h3>          
              {movie.Actor}
            </div>
            <div>
              <h3>Director</h3>
              {movie.Director}
            </div>
            <div>
              <h3>Production</h3>
              {movie.Production}
            </div>
            <div>
              <h3>Genre</h3>
              {movie.Genre}
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default MovieDetail