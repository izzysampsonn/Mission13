import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="podcast">Podcast</Link>
        </li>
        <li>
          <Link to="movielist">Movie List</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
