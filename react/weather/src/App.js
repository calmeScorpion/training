import React from 'react';

import GetGeoLocation from './GetGeoLocation';
import Weather from './Weather';

class App extends React.Component {
  locationComponent() {
    return <GetGeoLocation />;
  }
  render() {
    return <div className="container">{this.locationComponent()}</div>;
  }
}
export default App;
