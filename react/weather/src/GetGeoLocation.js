import React from 'react';

import Loader from './Loader';
import Weather from './Weather';
class GetGeoLocation extends React.Component {
  state = {
    lat: null,
    log: null,
    errormessage: null,
  };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (data) =>
        this.setState({
          lat: data.coords.latitude,
          log: data.coords.longitude,
        }),

      (error) =>
        this.setState({
          errormessage: error.message,
        })
    );
  }
  fetchLocation() {
    if (this.state.lat && !this.state.errormessage) {
      return (
        <div>
          Latitude:- {this.state.lat}
          <br />
          Longitude:- {this.state.log}
          <Weather latitude={this.state.lat} longitude={this.state.log} />;
        </div>
      );
    } else if (!this.state.lat && this.state.errormessage) {
      return <div>Error:- {this.state.errormessage}</div>;
    }
    return <Loader />;
  }
  render() {
    return this.fetchLocation();
  }
}
export default GetGeoLocation;
