import React from 'react';
import Header from './Header';
import '../app.css';
import Dashboard from './Dashboard';
const App = () => {
  return (
    <div className="main_body">
      <Header />
      <Dashboard />
    </div>
  );
};
export default App;
