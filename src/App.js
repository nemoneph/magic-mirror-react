import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AnalogClock, { Themes } from 'react-analog-clock';
import Weather from './Weather'

class App extends Component {


  render() {

    return (
      <div className="box">
        <div className="left-widget">
          <AnalogClock  width="150" theme={Themes.dark} />

        </div>
        <div className="right-widget">
          <Weather />
       </div>
      </div>
    );
  }
}

export default App;
