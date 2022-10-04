import React from "react";
const Content = (props) => {
  return (
    <div className="d-flex blog-item border border-info mb-3 rounded">
      <img
        className="rounded-circle shadow-1-strong me-3"
        src={props.dp}
        alt="avatar"
        width="65"
        height="65"
      />
      <div className="flex-grow-1 flex-shrink-1">
        <div>
          <div className="d-flex justify-content-between align-items-center">
            <p className="mb-1">{props.name}</p>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button className="me-1 btn btn-success">+82$</button>
      </div>
    </div>
  );
};
export default Content;
