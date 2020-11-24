import React, { Component } from 'react'
import axios from 'axios'

import './RandomQuoteMachine.css'

class RandomQuoteMachine extends Component {
  constructor(props) {
    super(props)
    this.quotes = []
  }

  state = {
    randomQuote: '',
    randomAuthor: '',
    randomColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
  }

  async componentDidMount() {
    this.quotes = await axios.get('https://type.fit/api/quotes')
    let quoteArray = [...this.quotes.data]
    let selectedNewQuote = quoteArray[Math.floor(Math.random() * 1643)]
    this.setState({
      randomQuote: selectedNewQuote.text,
      randomAuthor: selectedNewQuote.author,
      randomColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
    })
  }

  setRandomQuote = async () => {
    let quoteArray = [...this.quotes.data]
    let selectedNewQuote = quoteArray[Math.floor(Math.random() * 1643)]
    this.setState({
      randomQuote: selectedNewQuote.text,
      randomAuthor: selectedNewQuote.author,
      randomColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
    })
  }

  render() {
    let tweetLink = 'https://twitter.com/intent/tweet' // `?text=${this.state.randomQuote}`
    return (
      <div
        className="App"
        style={{ backgroundColor: this.state.randomColor, transition: '0.5s' }}
      >
        <div id="quote-box">
          <div id="text">
            <p style={{ color: this.state.randomColor, transition: '0.5s' }}>
              <span>"</span>
              {this.state.randomQuote}
            </p>
          </div>
          <div className="author-div">
            <p
              id="author"
              style={{ color: this.state.randomColor, transition: '0.5s' }}
            >
              - {this.state.randomAuthor}
            </p>
          </div>
          <div id="new-quote-div">
            <button
              id="new-quote"
              style={{
                backgroundColor: this.state.randomColor,
                color: '#ffffff',
                transition: '0.5s',
              }}
              onClick={this.setRandomQuote}
            >
              New Quote
            </button>
            <a
              id="tweet-quote"
              target="_blank"
              rel="noreferrer"
              href={tweetLink}
              style={{
                color: this.state.randomColor,

                transition: '0.5s',
              }}
            >
              Tweet this quote
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default RandomQuoteMachine
