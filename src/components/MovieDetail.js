import React, { useState } from 'react'

import '../style/MovieDetail.scss'
import Loader from './Loader'


const MovieDetail = () => {

  const [movie, setMovie] = useState({})
  
  let loading = false
  let imageLoading = false

  function requestDifferentSizeImage(url, size=700) {
    if (!url) {
      return ""
    }
    const src = url.replace("SX300", `SX${size}`)
    const img = document.createElement('img')
    img.src = src
    img.addEventListener('load', () => {
      imageLoading = false
    })
    return src
  }

  return (
    <div class="container">
      {
        loading
        
        ?  // 로딩중인 경우
        <div class="skeleton-loader">
          <div class="poster">

          </div>
          <div class="skeletons">
            <div class="skeleton title"></div>
            <div class="skeleton specs"></div>
            <div class="skeleton plot"></div>
            <div class="skeleton etc"></div>
            <div class="skeleton etc"></div>
            <div class="skeleton etc"></div>
          </div>
          <Loader absolute />
        </div>
        
        :  // 로딩이 끝난 경우
        <div class="movie-details">
          <div 
            class="poster"
            style={{ backgroundImage: `url(${requestDifferentSizeImage(movie?.Poster)})` }}>
            {
              imageLoading
              ? <Loader scale=".7" absolute />
              : null
            }
            <div className='like noselect'>
              <span>♥</span>
            </div>
          </div>

          <div class="specs">

            <div class="title">
              {/* 영화 타이틀 */}
            </div>

            <div class="labels">
              <span>
                {/* 개봉 날짜 */}
              </span>
              <span class="dot">·</span>
              <span>
                {/* 상영 시간 */}
              </span>
              <span class="dot">·</span>
              <span>
                {/* 국가(지역) */}
              </span>
            </div>
            <div class="plot">
              {/* 설명 */}
            </div>
            <div class="ratings">
              <h3>Ratings</h3>
              <div class="rating-wrap">
                {
                  /* movie.Ratings를 순회하여 이미지 및 점수를 표출 */
                  <div
                    title="" // 출처(Source)
                    class="rating">
                    <img 
                      src="" // /assets/{Source}.png
                      alt="" // Source
                      height="30" />
                    <span>
                      {/* 평점 */}
                    </span>
                  </div>
                }
              </div>
            </div>
            <div>
              <h3>Actors</h3>          
              {/* 배우(Actor) */}
            </div>
            <div>
              <h3>Director</h3>
              {/* 감독(Director) */}
            </div>
            <div>
              <h3>Production</h3>
              {/* 제작사 */}
            </div>
            <div>
              <h3>Genre</h3>
              {/* 장르 */}
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default MovieDetail