import React from 'react';

const Sales = () => {
  return (
    <div className="card w-90">
      <img className="card-img-top" src={require('../images/salesgraph.png')} />{' '}
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Avarage Sale: $650 Comissions:$29500 Revenue:$55,000
          Expenses:$1,130,600
        </p>
      </div>
    </div>
  );
};
export default Sales;
