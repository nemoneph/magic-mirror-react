import React, { Component } from 'react';
import WeatherIcon from './WeatherIcon';
import './Weather.css';

class Weather extends Component {

  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      currently: {},
      daily : []
    }
  }
  //
  componentDidMount() {
    this.fetchData()
    setInterval(this.fetchData.bind(this), 1000*3600); // 

  }
  fetchData() {
    const API_URL = 'https://api.darksky.net/forecast/7379dcda9fb6431804dabe88556c0a91/45.7435453,%204.8645229?lang=fr&units=si';
    fetch('https://cors-anywhere.herokuapp.com/'+ API_URL)
    .then((response) =>  response.json())
    .then((responseData) => {
      this.setState({
        currently: responseData.currently,
        daily: responseData.daily.data
      });
    });
  }

  getDate() {
    let jours = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi");
    let mois = new Array("janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre");
    // on recupere la date
    let date = new Date();
    // on construit le message
    let message = jours[date.getDay()] + " ";   // nom du jour
    message += date.getDate() + " ";   // numero du jour
    message += mois[date.getMonth()] + " ";   // mois
    message += date.getFullYear();

    return message;
  }

  getDay(idx) {
    /*if (idx >= 7) {
      idx = 1;
    }*/
    let jours = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi");
    let date = new Date();
    let day = (date.getDay()+idx) % 7;


    return jours[day];   // nom du jour

  }
  render() {
    let currently =  this.state.currently;
    let daily = this.state.daily;
    var day = '';
    const dailyWeather = daily.map((daily, idx) => {
       if(idx != 0) {
         day =  this.getDay(idx);
      } else {
        day = 'Aujourd\'hui';
      }
       return (<li key={daily.sunsetTime}  className={daily.icon}>
             <div className="inner">
                <h5 className="week-day">{day}</h5>
                <i className="climacon sun">
                <WeatherIcon icon={daily.icon} />
                </i><br /><br />
                <p className="week-day-temperature">{ Math.round(daily.temperatureMin)}° / { Math.round(daily.temperatureMax)}°</p>
             </div>
          </li>)

    });

    return (

      <div className="widget-block">
                        <div className="img-area">
                          <div className="img-area-mask"></div>

                           <div className="img-area-front">
                              <h5 className="location">Lyon</h5>
                              <p className="today">{this.getDate()}</p>
                              <div className="weather-desc">
                                 <span>{currently.summary}</span>
                                    <i className="climacon moon full"></i> <span>{ currently.humidity * 100}% humidité</span>
                                    <i className="climacon wind"></i> <span>{ currently.windSpeed } Km/h</span>
                              </div>
                              <ul className="weather-block-info">
                                 <li>
                                    <p className="temperature">{ Math.round(currently.temperature) }<span className="temperature-feels">{ Math.round(currently.apparentTemperature)} ° ressenti</span></p>
                                 </li>
                                 <li>
                                  <WeatherIcon icon={currently.icon} />
                                 </li>
                                 <li>

                                 </li>
                              </ul>
                           </div>
                        </div>
                        <ul className="week-forecast">
                        { dailyWeather}
                        </ul>
                     </div>
    );
  }
}

export default Weather;
