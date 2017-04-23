import React, { Component } from 'react';
import './App.css';
import AnalogClock, { Themes } from 'react-analog-clock';
import Weather from './Components/Weather/Weather'
import Knowledge from './Components/Knowledge/Knowledge'
import Quote from './Components/Quote/Quote'
import Trello from './Components/Trello/Trello'

class App extends Component {


  render() {

    return (
      <div className="wrapper-rotate">
        <div className="wrapper-page">
          <div className="box-header"></div>
          <div className="box-content">
            <div className="left-widget">
              <AnalogClock  width="150" theme={Themes.dark} />

              <Quote />
            </div>
            <div className="right-widget">
              <Weather />
           </div>
          </div>
          <div className="box-footer">
            <footer>
              <div className="left-footer">
                <Knowledge />
              </div>
              <div className="center-footer">
                <Trello />
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
