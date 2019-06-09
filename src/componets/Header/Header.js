import React from 'react';
import './Header.scss';

function Header() {
  return (
    <header id="nav">
    <div className="nav-wrapper">
      <div className="logo">
        RBP.im g
      </div>
      <div className="menu-wrapper">
        <ul className="menu">
          <li>
              <a>Home </a>
          </li>
          <li>
            <a>Schedule</a>
          </li>
          <li>
            <a>  Apply</a>
          </li>
          <li>
              <a>organize</a>
          </li>
          <li>
              <a>About us</a>
          </li>
        </ul>
      </div>
      </div>
    </header>
  );
}

export default Header;
