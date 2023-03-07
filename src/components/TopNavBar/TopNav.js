import './style.css';
import React from 'react';
import {Link} from 'react-router-dom';
import Alert from '../Dialog/DialogBox/Dialog';
const Topnav=()=> {
  return (
    <>
    <nav className="navbar-expand-lg navbar-light bg-theam fixed-top p-2">
        <ul className='navbar-nav '>
          <li><span><i className="fa fa-user fa-2x user-color"></i></span></li>
        </ul>
    </nav>
    </>
  );
}
export default Topnav;
