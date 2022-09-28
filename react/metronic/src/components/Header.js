const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={require('../images/logo.png')} />
      </div>
      <div className="navigation">
        <input placeholder="search"></input>
        <div
          class="btn btn-icon btn-custom w-30px h-30px w-md-40px h-md-40px"
          id="kt_activities_toggle"
        >
          <span class="svg-icon svg-icon-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="8"
                y="9"
                width="3"
                height="10"
                rx="1.5"
                fill="currentColor"
              ></rect>
              <rect
                opacity="0.5"
                x="13"
                y="5"
                width="3"
                height="14"
                rx="1.5"
                fill="currentColor"
              ></rect>
              <rect
                x="18"
                y="11"
                width="3"
                height="8"
                rx="1.5"
                fill="currentColor"
              ></rect>
              <rect
                x="3"
                y="13"
                width="3"
                height="6"
                rx="1.5"
                fill="currentColor"
              ></rect>
            </svg>
          </span>
        </div>
        <div
          class="btn btn-icon btn-custom w-30px h-30px w-md-40px h-md-40px position-relative"
          data-kt-menu-trigger="click"
          data-kt-menu-attach="parent"
          data-kt-menu-placement="bottom-end"
        >
          <span class="svg-icon svg-icon-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2929 2.70711C11.6834 2.31658 12.3166 2.31658 12.7071 2.70711L15.2929 5.29289C15.6834 5.68342 15.6834 6.31658 15.2929 6.70711L12.7071 9.29289C12.3166 9.68342 11.6834 9.68342 11.2929 9.29289L8.70711 6.70711C8.31658 6.31658 8.31658 5.68342 8.70711 5.29289L11.2929 2.70711Z"
                fill="currentColor"
              ></path>
              <path
                d="M11.2929 14.7071C11.6834 14.3166 12.3166 14.3166 12.7071 14.7071L15.2929 17.2929C15.6834 17.6834 15.6834 18.3166 15.2929 18.7071L12.7071 21.2929C12.3166 21.6834 11.6834 21.6834 11.2929 21.2929L8.70711 18.7071C8.31658 18.3166 8.31658 17.6834 8.70711 17.2929L11.2929 14.7071Z"
                fill="currentColor"
              ></path>
              <path
                opacity="0.3"
                d="M5.29289 8.70711C5.68342 8.31658 6.31658 8.31658 6.70711 8.70711L9.29289 11.2929C9.68342 11.6834 9.68342 12.3166 9.29289 12.7071L6.70711 15.2929C6.31658 15.6834 5.68342 15.6834 5.29289 15.2929L2.70711 12.7071C2.31658 12.3166 2.31658 11.6834 2.70711 11.2929L5.29289 8.70711Z"
                fill="currentColor"
              ></path>
              <path
                opacity="0.3"
                d="M17.2929 8.70711C17.6834 8.31658 18.3166 8.31658 18.7071 8.70711L21.2929 11.2929C21.6834 11.6834 21.6834 12.3166 21.2929 12.7071L18.7071 15.2929C18.3166 15.6834 17.6834 15.6834 17.2929 15.2929L14.7071 12.7071C14.3166 12.3166 14.3166 11.6834 14.7071 11.2929L17.2929 8.70711Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Header;
