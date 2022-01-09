import axios from 'axios'


export const getMovies = () => {
  axios.get(
    `${process.env.REACT_APP_API_ENDPOINT}/movie/list?title=lion&type=movie`,
    {
      headers: {
        'x-api-key': process.env.REACT_APP_API_KEY
      }
    }
  )
  .then(d => {console.log("success : ", d)})
  .catch(e => {console.log("failed : ", e)})
}
