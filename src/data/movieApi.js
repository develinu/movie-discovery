import axios from 'axios'

export const userId = "이누"

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
export const getLikeMovies = (userId) => {
  return axios.get(
    `${process.env.REACT_APP_API_ENDPOINT}/movie/like?userId=${userId}`,
    {
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY
      }
      
    }
  )
}

// 좋아하는 영화 추가하기
export const addLikeMovie = (userId, movieId) => {
  return axios.post(
    `${process.env.REACT_APP_API_ENDPOINT}/movie/like`,
    {
      "userId": userId,
      "movieId": movieId
    },
    {
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY
      }
      
    }
  )
}
