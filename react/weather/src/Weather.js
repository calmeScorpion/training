import React from 'react';
import axios, { Axios } from 'axios';
class Weather extends React.Component {
  location() {
    let lat = this.props.latitude;
    let log = this.props.longitude;
    return lat, log;
  }
  state = {
    latitude: [],
    longitude: [],
  };
  getWeather = (lat, log) => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=ea9b77cf063a9854add4d3ad55086080&query=New%20York`
      )
      .then(console.log(axios.get()));
  };
  render() {
    return console.log(this.location(), this.getWeather());
  }
}
export default Weather;
// access_key=ea9b77cf063a9854add4d3ad55086080
