import React,{ useState,useRef } from 'react';
import {useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { Screen } from '../components/core/core';
function Login(){
 var Navigate = useNavigate();
 const Onforcused=useRef('');
 const [Password,SetPassword]=useState('');
 const [UserName,SetUserName]=useState('');
 const Checklogin= ()=>{
    // Axios()
    Axios.post("http://localhost:3001/login",{username:UserName,password:Password})
    .then((response)=>{
        if(response.data[0][0].Per_Result==-1){
          Screen.Notification.Error(Screen.Notification.Msg.Def2,1000);
          Onforcused.current.focus();
          Navigate('/Login');
        }else{
          localStorage.setItem('loggedIn',true);
          Screen.Notification.Success(Screen.Notification.Msg.Def1);
          Navigate('/Dashboard');
        }
  }) .catch((error) => {
      console.log(error);
    });
  }
    return (
      <div className="wrapper d-flex align-items-stretch">
      
          <section className="vh-100 w-100"  style={{'background-color':'#9A616D'}}>
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col col-xl-10">
                <div className="card">
                  <div className="row g-0">
                    <div className="col-md-6 col-lg-5 d-md-block">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                        alt="login form" className="img-fluid" />
                    </div>
                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                      <div className="card-body p-4 p-lg-5 text-black">
                        <form>
                          <div className="d-flex align-items-center mb-3 pb-1">
                            <i className="fas fa-cubes fa-2x me-3" style={{color: '#ff6219'}}></i>
                            <span className="h1 fw-bold mb-0">Logo</span>
                          </div>
                          <h5 className="fw-normal mb-3 pb-3" style={{'letter-spacing': '1px'}}>Sign into your account</h5>
                          <div className="form-outline mb-4">
                            <input ref={Onforcused} type="text" id="form2Example17" className="form-control form-control-lg" onChange={(e)=>{
                                SetUserName(e.target.value);
                            }} />
                            <label className="form-label" for="form2Example17">Email address</label>
                          </div>
                          <div className="form-outline mb-4">
                            <input  type="password" id="form2Example27" className="form-control form-control-lg" 
                            onChange={(e)=>{
                              SetPassword(e.target.value);
                          }}  />
                            <label className="form-label" for="form2Example27">Password</label>
                          </div>
                          <div className="alert" id="alert" role="alert">
                          </div>
                          <div className="pt-1 mb-4">
                            <button className="btn btn-dark btn-lg btn-block" type="button" onClick={ Checklogin}>Login</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>);
}
 export default Login;
 