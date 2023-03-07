
import React from 'react'
import Datatable from '../components/DataTable/DataTable'
function Item() {
  const HeadTitle= [
    { title : 'Pid',data:'Pid',render:(data,type)=>{
      return  '<a class="cursor-pointer text-dark" ><b>'+  data + '1001' +'</b> </a>'}},
    { title : 'Customer Name',data:'CustomerName' }
    ];
  const Id='getitem';
  const SP='Com_Delete';
  const Redirect='/Item';
  return (
          <> 
            <Datatable Title={HeadTitle} Id={Id} Redirect={Redirect}  SP={SP}/>
          </>
  )
}

export default Item
