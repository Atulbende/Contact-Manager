import React,{ useState} from 'react'
import {useNavigate} from 'react-router-dom';
import {Api} from "../core/services";
import "bootstrap/js/dist/modal"
import "jquery-ui-dist/jquery-ui";
import "jquery/dist/jquery.min.js";
import Dialog from '../Dialog/DialogBox/Dialog';
import $ from "jquery";
import { Screen,Validation,Notify, } from '../core/core';
import './style.css'
function Bar(props) {
  const Navigate=useNavigate();
  const [show, setShow] = useState('d-none');
  const DeleteData= async()=>{
        var res=await  Api('POST','http://localhost:3001/delete/',{Id:props.Id,Table:props.GridId.slice(3),SP:props.SP});
        props.Id.forEach((val,i) => {
          Screen.Notification.Success(val+':'+Screen.Notification.Msg.Def5,i>=50?i+10*1+i:i+1000*i);
        });
        props.setRefresh(res.data.affectedRows+Math.random()); 
        setShow('d-none');
  }
  const SaveData= async()=>{
    var res=await  Api('POST','http://localhost:3001/save/',{Data:props.FormData,SP:props.SP});
    Notify.NotifyMsg(res.data)    
        setShow('d-none');
  //  if(JSON.stringify(props.FormData)===JSON.stringify(JSON.parse(localStorage.getItem('Obj'))))Screen.Notification.Error(Screen.Notification.Msg.Def6,1000);
  }
  function Selectall(){
    $('#sampleTable').DataTable().rows({page:'current'}).select();
    var items=props.GetSelect();
    props.setId(items);
  }  
  function DeSelectall(){
    props.setId([]);
    var table=$('#sampleTable').DataTable();
    table.rows().deselect();
  }
  return (
    <>
    <div className='p-1 bg'>
          <ul >
            <li className='bc'>
            </li>
            <li className='menus d-flex'>
              <ul>
              {(props.Id.length==0 && props.Type=='Grid')  &&(<><li className='bar_btn mx-2'  onClick={()=>{ Navigate('/NewCustomer',{state:{Data:-1}}); }} ><span><i className="fa fa-plus p-1" aria-hidden="true"></i><span className='mx-2'>New</span></span></li><li className='bar_btn' onClick={()=>{ Selectall();}}><section className='_count'>{props.Id.length}</section><span><i className="fa fa-tasks p-1" aria-hidden="true"></i><span className='mx-1'>Select All </span></span></li></>)}  
              {(props.Id.length>0 && props.Type=='Grid') && (<li className='bar_btn mx-2' onClick={()=>{DeSelectall()}}><section className='_count'>{props.Id.length}</section><span><i className="fa fa-tasks p-1" aria-hidden="true"></i><span className='mx-1'>DeSelect All</span></span></li>)}
              {(props.Id.length>0 && !props.Id.includes(-1)) && (
              <li className='bar_btn mx-2'  onClick={()=>{setShow('');}} ><span><i className="fa fa-trash p-1" aria-hidden="true"></i><span className='mx-2'>Delete</span></span></li>)  }
              {props.Type=='Form' && (<li className='bar_btn mx-2'  onClick={()=>{
                if(Validation.IsValid(props.Validation,props.FormData))setShow('');
                }} ><span><i className="fa fa-check p-1" aria-hidden="true"></i><span className='mx-2'>Save</span></span></li>)  }
              </ul>
            </li>
          </ul>
          {/* onClick={()=>{  DeleteData();}}  data-bs-toggle="modal" data-bs-target="#exampleModal"*/}
          <Dialog show={show} setShow={setShow}  fn={props.Type=='Grid'?DeleteData:SaveData} Title={props.Type=='Grid'?'Delete':'Save'} Msg={props.Type=='Grid'?'Are you sure to delete?':'Are you sure to save?'}/>
    </div>
   
    </>
  ) 

}
export default Bar