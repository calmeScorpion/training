import React from 'react';
import Card from './Card';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className="topbar">
        <p>Dashboard | #XRS-45670</p>
        <div className="buttons ">
          <button>Today: Oct3</button>
          <button>Filters</button>
          <button>Create</button>
        </div>
      </div>
      <div className="components">
        <Card />
      </div>
    </div>
  );
};

export default Dashboard;
