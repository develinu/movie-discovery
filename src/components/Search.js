import React from 'react'
import '../style/Search.scss'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getMovies } from '../data/movieApi'


const Search = () => { 

  const types = [
    'Movie',
    'Series',
    'Episode'
  ]
  const years = ["All"]
  for (let y = new Date().getFullYear(); y >= 2000 ; y--) {
    years.push(y)
  }

  const [title, setTitle] = useState('')
  const [selectType, setSelectType] = useState(types[0])
  const [selectYear, setSelectYear] = useState(years[0])

  const dispatch = useDispatch()

  const formValidation = () => {
    if (!title || title.length === 0) {
      alert("타이틀을 입력해주세요!")
    }

    if (selectYear === years[0]) {
      setSelectYear("")
    }
    
    return true
  }

  const clearMovies = () => {
    dispatch({ type: 'clearMovies' })
  }

  const onSearchHandler = async () => {
    if (!formValidation) {
      return
    }

    clearMovies()
    dispatch({ type: 'start' })
    const response = await getMovies(title, selectType, selectYear)
    dispatch({ type: 'setMovies', payload: { item: response?.data?.Search } })
    dispatch({ type: 'done' })
  }

  return (
    <div className="search">
      <div className="text-field">
        <input 
          type="text" 
          placeholder="Search for Movies, Series & more" 
          onChange={e => { setTitle(e.target.value) }}/>
      </div>

      <div className="select">
        <select 
          defaultValue={selectType} 
          onChange={e => { setSelectType(e.target.value.toLowerCase()) }}>
        {
          types.map((type, idx) => {
            return (
                <option key={idx} value={type.toLowerCase()}>{type}</option>
            )
          })
        }
        </select>
      </div>

      <div className="select">
        <select 
          defaultValue={selectYear}
          onChange={e => { setSelectYear(e.target.value) }}>
        {
          years.map((year, idx) => {
            return (
                <option key={idx} value={year}>{year}</option>
            )
          })
        }
        </select>        
      </div>

      <button 
        className="btn"
        onClick={onSearchHandler}> Apply </button>
    </div>
  )
}

export default Search