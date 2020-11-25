import React from 'react'

import './Quote.css'

const quote = (props) => {
  return (
    <div id="text">
      <p style={{ color: props.randomColor, transition: '0.5s' }}>
        <span>"</span>
        {props.randomQuote}
      </p>
    </div>
  )
}

export default quote
