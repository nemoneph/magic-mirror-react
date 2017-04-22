import React, { Component } from 'react';
import './Trello.css'

class Trello extends Component {

  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      cards: [],
    }
  }
  //
  componentDidMount() {
    this.fetchData()
    setInterval(this.fetchData.bind(this), 1000*3600); // 3 minutes in milliseconds

  }
  fetchData() {

    // http://secouchermoinsbete.fr/feeds.atom
    const API_URL = 'https://api.trello.com/1/lists/58f4a674c010ae6407db6699?fields=name&cards=open&card_fields=name&key=f9861f47c8dbc3ed7c87c98d57ab1d7a&token=a65c1642977da7a2d29a3ee3576dd257b26837f48aaece5ca4747211c4da9bc6';
    fetch('https://cors.now.sh/'+ API_URL)
    .then((response) =>  response.json())
    .then((responseData) => {
      this.setState({
        cards: responseData.cards
      });
    });
  }

  render() {
    let cards = this.state.cards;

    const cardItems = cards.map((card, idx) => {
       return (<li key={card.id}>
                  - {card.name}
             </li>);

    });

    return (
      <div className="card-widget">
        <span className="widget-title">
          <i className="fa fa-list" aria-hidden="true"></i>
           Todos
          </span>
        <ul className="">
            { cardItems}
        </ul>
</div>

    );
  }

}

export default Trello
