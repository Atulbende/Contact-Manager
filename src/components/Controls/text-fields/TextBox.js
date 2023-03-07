import React, { useEffect } from 'react'
import './style.css'
export default function TextBox({EventData,Label,Id,Val,Col}) {
  const  HandleInput=((e)=>{
    EventData((pre)=>({...pre,[e.target.id]:e.target.value}))
  })
  return (
      <div className={`${Col}`}>
        <label className='label' for={Label}>{Label}</label>
        <input onChange={HandleInput}   type="text" className='w-100' value={Val}  id={Id} placeholder={Label}></input>
      </div>
  )
}
