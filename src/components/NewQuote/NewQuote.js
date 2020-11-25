import React from 'react'

import './NewQuote.css'

const newQuote = (props) => {
  return (
    <div id="new-quote-div">
      <button
        id="new-quote"
        style={{
          backgroundColor: props.randomColor,
          color: '#ffffff',
          transition: '0.5s',
        }}
        onClick={props.click}
      >
        New Quote
      </button>
      <a
        id="tweet-quote"
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/intent/tweet" //`?text=${props.randomQuote}`
        style={{
          color: props.randomColor,

          transition: '0.5s',
        }}
      >
        Tweet this quote
      </a>
    </div>
  )
}

export default newQuote
