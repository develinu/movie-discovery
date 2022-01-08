import React from 'react'

import '../style/Loader.scss'


const Loader = ({ scale, absolute, fixed }) => {
  const absoluteClass = absolute ? "absolute" : null
  const fixedClass = fixed ? "fixed" : null

  return (
    <div 
      style={{ transform: `scale(${scale})` }}
      className={`loading ${absoluteClass} ${fixedClass}`}>
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </div>
  )
}

export default Loader