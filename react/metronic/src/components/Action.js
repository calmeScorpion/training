const Action = (props) => {
    return (
      <div className="action d-flex flex-column">
        <div className="content">{props.children}</div>
      </div>
    );
  };
  export default Action;
  