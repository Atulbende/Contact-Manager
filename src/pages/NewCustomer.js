
import React, { useState,useEffect } from 'react'
import  Button  from '../components/Controls/Button/Button';
import  TextBox  from '../components/Controls/text-fields/TextBox';
import Bar from '../components/bar/Bar'
import Sidenav from '../components/SideNavBar/SideNav';
import { useLocation } from 'react-router-dom';
import {Form} from "../components/core/core";
function Newcustomer(props) {
  const SelectedData=useLocation();
  const [CustomerData,SetCustomerData]=useState({Pid:'-1',CustomerName:'',MobileNo:'',Address:''});
  const ValidFields=['CustomerName','MobileNo'];
  useEffect(()=>{
       Form.Load (CustomerData,SetCustomerData,SelectedData.state.Data);       
  },[]);
  return (
    <>
          <div className="wrapper d-flex align-items-stretch">
          <Sidenav/>
          <div id="content" >
          <Bar Type={'Form'} Id={CustomerData.Pid} GridId={''} setRefresh={''} setId={''} GetSelect={''} FormData={CustomerData} Validation={ValidFields} SP='CustomerSave'/>
            <form className='p-2 m-2'>
                <div className='contanier'>
                <div className='row'>
                <TextBox EventData={SetCustomerData} Label="Customer Name" Id='CustomerName' Val={CustomerData.CustomerName} Col="col-md-4"/>
                <TextBox EventData={SetCustomerData} Label="Mobile No" Id='MobileNo' Val={CustomerData.MobileNo} Col="col-md-3"/>
                <TextBox EventData={SetCustomerData} Label="Address" Id='Address' Val={CustomerData.Address} Col="col-md-5"/>
                </div>
                </div>
            </form>
          </div>
          </div>
     </>
  )
}

export default Newcustomer
