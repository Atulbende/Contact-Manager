
import React from 'react'
import Datatable from '../components/DataTable/DataTable'
function Customer() {
  const HeadTitle= [
    { title : 'Pid',data:'Pid',render:(data,type)=>{
      return  '<p class="link-primary" >'+  data+'0000000' +'</p>'}},
    { title : 'Customer Name',data:'CustomerName' },
    { title : 'Mobile No.',data:'MobileNo' },
    { title : 'Address',data:'Address' }
    ];
  const Id='getcustomer';
  const SP='Com_Delete';
  const Redirect='/NewCustomer';
  return (
          <> 
            <Datatable Title={HeadTitle} Id={Id} Redirect={Redirect}  SP={SP}/>
          </>
  )
}

export default Customer

// import React,{ useEffect,useState} from 'react'
// import Axios from 'axios';
// import Sidenav from '../components/SideNavBar/SideNav'
// import Bar from '../components/Bar/Bar'
// import "jquery-ui-dist/jquery-ui";
// import "datatables.net-dt"
// import "jquery/dist/jquery.min.js";
// import "datatables.net-dt/js/dataTables.dataTables";
// import "datatables.net-dt/css/jquery.dataTables.min.css";
// import "datatables.net-buttons/js/dataTables.buttons.js";
// import "datatables.net-buttons/js/buttons.colVis.js";
// import "datatables.net-buttons/js/buttons.flash.js";
// import "datatables.net-buttons/js/buttons.html5.js";
// import "datatables.net-buttons/js/buttons.print.js";
// import $ from "jquery";
// import { Screen } from '../components/core/core';

// function Customer() {
//   const [Getdata,setdata]=useState([]);
//   useEffect(()=>{
//     Checklogin();
//   },[]);
//   const Checklogin= async()=>{
//     Screen.LoaderON();
//     await  Axios.get("http://localhost:3001/getcustomer",{})
//     .then((response)=>{
//       // console.log(response.data);
//       // var oTable=$('#sampleTable').DataTable();
//       // oTable.fnClearTable();
//       // oTable.fnDestroy();
//       $('#result').html(setdata(response.data))
//       $('#sampleTable').DataTable({
//         pagingType: "full_numbers",
//         pageLength: 20,
//         processing: true,
//         dom: "Bfrtip",
//         select: {
//           style: "single",
//         },
//         buttons: [
//           {
//             extend: "pageLength",
//             className: "btn btn-secondary bg-secondary",
//           },
//           {
//             extend: "copy",
//             className: "btn btn-secondary bg-secondary",
//           },
//           {
//             extend: "csv",
//             className: "btn btn-secondary bg-secondary",
//           },
//           {
//             extend: "print",
//             customize: function (win) {
//               $(win.document.body).css("font-size", "10pt");
//               $(win.document.body)
//                 .find("table")
//                 .addClass("compact")
//                 .css("font-size", "inherit");
//             },
//             className: "btn btn-secondary bg-secondary",
//           },
//         ]
//       });
//       // setdata(response.data);
//       Screen.LoaderOff();

//       // setdata([...Getdata]);
     
//         // if(response.data[0][0].Per_Result==-1){
//         //   Screen.LoaderOff();
//         //   Screen.Notification.Error(Screen.Notification.Msg.Def2,1000);
//         //   Navigate('/Login');
//         // }else{
//         //   localStorage.setItem('loggedIn',true); 
//         //   Screen.LoaderOff();
//         //   Screen.Notification.Success(Screen.Notification.Msg.Def1);
//         //   Navigate('/Dashboard');
//         // }
//   }) .catch((error) => {
//       console.log(error);
//     });}
//   return (
//     <> 
        

//     <div className="wrapper d-flex align-items-stretch">
//       <Sidenav/>
//       <div id="content" className=" ">
//         <Bar/>
//         <div className='tile-body table-responsive p-md-3'>
//         <table className='table table-striped table-bordered nowrap' id='sampleTable'>
//           <thead>
//             <tr>
//             <th>Id</th>
//             <th>Customer Name</th>
//             <th>Address</th>
//             </tr>
//           </thead>
       
//         <tbody id="result">
//          {Getdata.map((val)=>{
//              return <tr key={val.Id}><td>{val.Id}</td><td>{val.CustomerName}</td><td>{val.Address}</td></tr> 
//           })}  
//         </tbody>
//         </table>
//         </div>
//       </div>
//      </div>
//      </>
//   )
// }

// export default Customer