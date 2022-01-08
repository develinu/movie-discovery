import React from 'react'
import { Link } from 'react-router-dom'

import '../style/Logo.scss'


const Logo = () => {
  return (
    <Link to="/" className="noselect">
      <span className="primary">GPD</span> 
      <span className="secondary">Movies</span>
    </Link>
  )
}

export default Logo