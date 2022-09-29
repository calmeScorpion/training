import React from 'react';
import Card from './Card';
import Header from './Header';
import '../app.css';
import Dashboard from './Dashboard';
const App = () => {
  return (
    <div className="main_body">
      {/* //   <img
    //     src={require('../images/background.jpeg')}
    //     className="bg-image shadow-1-strong"
    //   /> */}
      <Header />

      <Dashboard />
      {/* //   <div className="header">
    //     <img src={require('../images/logo.png')} />
    //     <input className="search" placeholder="search" />
    //   </div>
    //   <i className="bi bi-chat-right-text"></i>
    //   <i className="bi bi-grid-fill"></i> */}
    </div>
  );
};
export default App;
