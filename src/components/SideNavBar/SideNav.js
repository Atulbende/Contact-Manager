import React,{ useEffect} from 'react';
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import { useNavigate,NavLink } from 'react-router-dom';
import "./style.css";
import {SideNavMenuList} from "./SideNavMenuList.js";
import Topnav from '../TopNavBar/TopNav';
function Sidenav() {
  function Logout(){
    localStorage.removeItem('loggedIn');
    Navigate('/Login');
  }
  const Navigate=useNavigate();
  useEffect(()=>{
      var fullHeight = function() {    
        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function(){
          $('.js-fullheight').css('height', $(window).height());
        });
      };
      fullHeight();
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
      });
      if(!localStorage.getItem('loggedIn'))Navigate('/login');
  },[]);
  return (
    <>  
       <Topnav/>
      <nav id="sidebar">
				<div className="custom-menu">
					<button type="button" id="sidebarCollapse" className="btn btn-primary">
	          <i className="fa fa-bars"></i>
	          <span className="sr-only">Toggle Menu</span>
	        </button>
        </div>
				<div className="p-4">
		  		<h1><a href="index.html" className="logo">Savtech <span>Customer Contacts</span></a></h1>
	        <ul className="list-unstyled components mb-5">
          {SideNavMenuList.map((val,i)=>{
            return(val.visible)?  (<li key={i}><NavLink  to={val.link}><span className={val.icon}></span> {val.title}</NavLink></li>):'';
          })
          }
          <li onClick={Logout}><span className="fa fa-sign-out mr-3 text-red"></span> Logout</li>
	        </ul>
	      </div>
    	</nav>
   
    </>
  )
}
export default Sidenav;