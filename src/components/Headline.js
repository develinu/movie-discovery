
import React from 'react'

import '../style/Headline.scss'


const Headline = () => {
  return (
    <div className="headline">
      <h1>
        <span className="primary">GPD MOVIES</span><br />
        <span className="secondary">
          REACT STUDY<br />
          FINAL HOMEWORK
        </span>
      </h1>
      <div className="description">
        <p>
          This page is the last homework assignment for the GPD React Study.
        </p>
        <p>
          It implements functions such as backend API integration, search function, data handling, and redux utilization.
        </p>
      </div>
    </div>
  )
}

export default Headline