import React,{ useEffect,useReducer,useState} from 'react'
import Sidenav from '../SideNavBar/SideNav'
import Bar from '../bar/Bar'
import {useNavigate } from 'react-router-dom';
import "jquery-ui-dist/jquery-ui";
import "datatables.net-dt"
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-select/js/dataTables.select.min.mjs"
import "../DataTable/datatable.css"
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import {Api} from "../core/services";
import $ from "jquery";
function Datatable(props) {
const Navigate=useNavigate();
const [Refresh,setRefresh]=useState(-1);
const [Id,setId]=useState([]);
useEffect(()=>{
  ResetSelect();
  setId([]);
  LoadGrid();
},[Refresh]);
function ResetSelect(){
  ($('#sampleTable.dataTable').find('tbody')).on('click','tr td',function(event){
     $(this).parent().toggleClass('selected');
  });
}
function GetSelect(){
  var table=  $('#sampleTable').DataTable();
  var items = $.map(table.rows('.selected').data(), function (item) {
    return item.Pid;
  });return items;
}
    const LoadGrid= async()=>{
      try { 
          var res= await Api('GET',"http://localhost:3001/"+props.Id,{})
          var table=  $('#sampleTable').DataTable({'data':res.data,'columns' :props.Title,destroy: true });           
          ($('#sampleTable.dataTable').find('tbody')).on('click','tr td',function(event){
              $(this).parent().toggleClass('selected');
              var cellDT=table.cell(this).index();
              var items=GetSelect();
              setId(items);
              if(cellDT)if(cellDT.column==0)Navigate(props.Redirect,{state:{Data:table.rows(this).data()[0]}});
            });
        } catch (error) {
          console.log(error)
        }
    }
  return (
    <>    
    <div className="wrapper d-flex align-items-stretch">
      <Sidenav/>
      <div id="content">
        <Bar Type={'Grid'} Id={Id} GridId={props.Id} setRefresh={setRefresh} setId={setId} GetSelect={GetSelect} SP={props.SP}/>
        <div className='tile-body table-responsive'>
           <table className='table dataTable table-striped w-100 bg-red' id='sampleTable'>
        </table>
        </div>
      </div>
     </div>
     </>
  )
}
export default Datatable

