import React,{ useEffect} from 'react'
import {Routes,Route,useNavigate} from 'react-router-dom';
import {SideNavMenuList} from "../components/SideNavBar/SideNavMenuList"  

function Index() {
  const Navigate=useNavigate();
  useEffect(()=>{
    if(!localStorage.getItem('loggedIn')){Navigate('/login');}else{Navigate('/Dashboard');}
},[]);
   return (
    <><Routes>{SideNavMenuList.map((val,key)=>{return <Route key={val.link}  path={val.link} element={val.component}/> })} </Routes></>)
            
 
}

export default Index 