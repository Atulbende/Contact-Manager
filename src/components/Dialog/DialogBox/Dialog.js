
import React, { useState } from 'react'
import ReactDom from 'react-dom'
import  Button  from '../../Controls/Button/Button';

import '../DialogBox/style.scss'
function Dialog({show,setShow,fn,Title,Msg}) {
  const [Close,SetClose]=useState('');
  const handleClose = () =>{setShow('d-none');}
  const handleConfirm=()=>{setShow('d-none');fn();}
  return ReactDom.createPortal(
    <>
    <div className={` orverlay ${show}`}>
     <div className=' h-25 dialog'>
        <div className='dialog-title'><span className='p-2'>{Title}</span> <button onClick={()=>setShow('d-none')} className='close-button'><span>X</span></button></div>
          <div className='dialog-body '>
            <span>{Msg}</span>
          </div>
          <div className='dialog-footer'>
            <hr></hr>
            <Button fn={handleClose} ClassNane='primary-button' Title='Cancel'/>
            <Button fn={handleConfirm} ClassNane='primary-button' Title='Confirm'/>
          </div>
        </div>   
        </div> 
     </>,document.getElementById('modal-root')
  )
}

export default Dialog

// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap'
// import Modal from 'react-bootstrap/Modal';
// function Dialog({show,setShow,fn,Title,Msg}) {
//   const handleClose = () =>{setShow(false);}
//   const handleConfirm=()=>{setShow(false);fn();}
//   return (
    
//     <>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>{Title}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>{Msg}</Modal.Body>
//         <Modal.Footer>
//           <Button className="secondary" onClick={handleClose}>
//             No
//           </Button>
//           <Button className="primary" onClick={handleConfirm}>
//             Yes
//           </Button>
//         </Modal.Footer>
//       </Modal>


      
//     </>
//   );
// }

// export default Dialog ;