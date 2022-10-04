import React from 'react';


class App extends React.Component {
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
  render() {
    if (this.state.lat && !this.state.errormessage) {
      return (
        <div>
          Latitude:- {this.state.lat}
          <br />
          Longitude:- {this.state.log}
        </div>
      );
    } else if (!this.state.lat && this.state.errormessage) {
      return <div>Error:- {this.state.errormessage}</div>;
    }
    return <h3>Loading...</h3>;
  }
}

export default App;
