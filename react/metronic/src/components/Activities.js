import React from 'react';

const Activities = (props) => {
  return (
    <div className="activities w-90">
      <div className="flex-grow-1 flex-shrink-1">
        <div>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-1 small mb-0">
              {props.time}
              {props.text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Activities;
