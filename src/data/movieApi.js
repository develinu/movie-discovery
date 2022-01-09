import axios from 'axios'


// 검색 영화 목록 가져오기
export const getMovies = (title, type, year) => {
  return axios.get(
    `${process.env.REACT_APP_API_ENDPOINT}/movie/list?title=${title}&type=${type}&year=${year}`,
    {
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY
      }
    }
  )
}

// 영화 상세 내용 가져오기
export const getMovie = (id) => {
  return axios.get(
    `${process.env.REACT_APP_API_ENDPOINT}/movie/detail?id=${id}`,
    {
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY
      }
      
    }
  )
}

// 좋아하는 영화 리스트 가져오기
export const getLikeMoves = (userId) => {
  return axios.get(
    `${process.env.REACT_APP_API_ENDPOINT}/movie/likes?userId=${userId}`,
    {
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY
      }
      
    }
  )
}

// 좋아하는 영화 추가하기
export const addLikeMove = (userId, movieId) => {
  return axios.post(
    `${process.env.REACT_APP_API_ENDPOINT}/movie/likes?userId=${userId}&movieId=${movieId}`,
    {
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY
      }
      
    }
  )
}
