import React from 'react'

import './QuoteBox.css'

import Quote from '../Quote/Quote'
import Author from '../Author/Author'
import NewQuote from '../NewQuote/NewQuote'

const quoteBox = (props) => {
  return (
    <div id="quote-box">
      <Quote randomQuote={props.randomQuote} randomColor={props.randomColor} />
      <Author
        randomAuthor={props.randomAuthor}
        randomColor={props.randomColor}
      />
      <NewQuote click={props.clicked} randomColor={props.randomColor} />
    </div>
  )
}

export default quoteBox
