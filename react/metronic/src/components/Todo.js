import React from 'react';

const Todo = (props) => {
  return (
    <div className="todo">
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          {props.text}
        </label>
      </div>
    </div>
  );
};
export default Todo;
