const Blog = (props) => {
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
            <p className="mb-1">
              {props.name} <span className="small">{props.time}</span>
            </p>
          </div>
          <p className="small mb-0">
            It is a long established fact that a reader will be distracted by
            the readable content of a page.
          </p>
        </div>
      </div>
      <div className="buttons">
        <button className="me-1 btn btn-success">Approve</button>
        <button className="me-1 btn btn-danger">Reject</button>
      </div>
    </div>
  );
};
export default Blog;
