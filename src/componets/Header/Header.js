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
              <a href="/">Home </a>
          </li>
          <li>
            <a href="/schedule">Schedule</a>
          </li>
          <li>
            <a href="/apply">  Apply</a>
          </li>
          <li>
              <a href="/apply">organize</a>
          </li>
          <li>
              <a href="/apply">About us</a>
          </li>
        </ul>
      </div>
      </div>
    </header>
  );
}

export default Header;
