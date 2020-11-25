import React, { Component } from 'react'
import axios from 'axios'

import './RandomQuoteMachine.css'

import QuoteBox from './components/QuoteBox/QuoteBox'

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
    return (
      <div
        className="App"
        style={{ backgroundColor: this.state.randomColor, transition: '0.5s' }}
      >
        <QuoteBox
          randomQuote={this.state.randomQuote}
          randomColor={this.state.randomColor}
          randomAuthor={this.state.randomAuthor}
          clicked={this.setRandomQuote}
        />
      </div>
    )
  }
}

export default RandomQuoteMachine
