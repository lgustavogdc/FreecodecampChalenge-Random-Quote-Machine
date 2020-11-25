import React from 'react'

import './Author.css'

const author = (props) => {
  return (
    <div className="author-div">
      <p id="author" style={{ color: props.randomColor, transition: '0.5s' }}>
        - {props.randomAuthor}
      </p>
    </div>
  )
}

export default author
