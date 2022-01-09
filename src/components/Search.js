import React from 'react'
import '../style/Search.scss'
import { useState } from 'react'


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

  return (
    <div className="search">
      <div className="text-field">
        <input 
          type="text" 
          placeholder="Search for Movies, Series & more" />
      </div>

      <div className="select">
        <select defaultValue={types[0]}>
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
        <select defaultValue="All">
        {
          years.map((year, idx) => {
            return (
                <option key={idx} value={year}>{year}</option>
            )
          })
        }
        </select>        
      </div>

      <button className="btn"> Apply </button>
    </div>
  )
}

export default Search