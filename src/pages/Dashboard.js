import React,{ useState} from 'react'
import Sidenav from '../components/SideNavBar/SideNav';
import  TextBox  from '../components/Controls/text-fields/TextBox';
import $ from "jquery";
function Dashboard() {
  const [_Styles,setStyle]=useState({width:"100px",height:"100px",background:"gray",padding:"0px",margin:"0px"});
  const _Clicked={width:"100px",height:"100px",background:"white",padding:"0px",margin:"0px"};
  const _cubes=[{Id:1},{Id:2},{Id:3},{Id:4},{Id:5}
  ,{Id:6},{Id:7},{Id:8},{Id:9}]


//   let Navigate=useNavigate();
//   useEffect(()=>{
//     if(!localStorage.getItem('loggedIn'))Navigate('/login');
// },[]); 
 function handle(e){
  _cubes.map((val)=>val.Id==e.target.id?$("#"+val.Id.toString()).css({..._Clicked}):$("#"+val.Id.toString()).css({..._Styles}))
}
  return (
    <>
      <div className="wrapper d-flex align-items-stretch">
        <Sidenav/>
        <div id="content" className='p-2 m-5'>
          <div className="parent row" style={{width:"300px",height:"300px"}}>
         {  _cubes.map((val,index)=>{
            return <div key={index} id={val.Id} className="child" style={_Styles} onClick={handle}></div>
           })
           }
           
            
          </div>
          </div>
    </div>
    </>
  )
}

export default Dashboard