import React, { Component } from 'react';
import './Knowledge.css'

class Knowledge extends Component {

  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      knowledges: [],
    }
  }
  //
  componentDidMount() {
    this.fetchData()
    setInterval(this.fetchData.bind(this), 1000*3600); // 3 minutes in milliseconds

  }
  fetchData() {
    // http://secouchermoinsbete.fr/feeds.atom
    const API_URL = 'https://geekz0ne.fr/rss-bridge/?action=display&bridge=ScmbBridge&format=JsonFormat';
    fetch('https://cors.now.sh/'+ API_URL)
    .then((response) =>  response.json())
    .then((responseData) => {
      this.setState({
        knowledges: responseData
      });
    });
  }

  render() {
    let knowledges = this.state.knowledges;

    const knowledgeItems = knowledges.map((knowledge, idx) => {
      let content = knowledge.content.replace(/&#039;/g,"'");
      if(idx < 1) {
       return (<li key={knowledge.timestamp}>
               <div className="bubble-container">
                 <div className="bubble">
                  {content}
                 </div>
               </div>
             </li>);
       }
    });

    return (
      <div className="knowledge-widget">
        <span className="first">
          <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
           Savoir du jour
          </span>
    <ul className="timeline">
        { knowledgeItems}
    </ul>
</div>

    );
  }

}

export default Knowledge
