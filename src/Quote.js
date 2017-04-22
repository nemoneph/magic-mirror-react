import React, { Component } from 'react';
import './Quote.css'
import quoteData from './Quote.json'

class Quote extends Component {

  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      quote: {},
    }
  }
  //
  componentDidMount() {
    this.fetchData()
    setInterval(this.fetchData.bind(this), 1000*3600*24); // 3 minutes in milliseconds

  }
  fetchData() {

    let currentQuote = quoteData[this.getDayOfYear()];
    this.setState({
      quote: currentQuote
    })

  }

  getDayOfYear() {
    let now = new Date();
    let start = new Date(now.getFullYear(), 0, 0);
    let diff = now - start;
    let oneDay = 1000 * 60 * 60 * 24;

  return Math.floor(diff / oneDay);

  }
  render() {
    let quote = this.state.quote;

    return (
        <div className="quote-widget">
          <div className="quote-content">
          <i className="fa fa-quote-left"></i>
          <blockquote className="quote-text">{quote.content}</blockquote><small className="author"> - {quote.author}</small></div>
        </div>
    );
  }

}

export default Quote
