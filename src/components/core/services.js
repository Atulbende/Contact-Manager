import Axios from 'axios';
import { Screen } from '../core/core';
Axios.interceptors.request.use(function (config) {Screen.LoaderON();return config;}, function (error) {return Promise.reject(error);});
Axios.interceptors.response.use(function (response) {Screen.LoaderOff();return response;}, function (error) {return Promise.reject(error);});
export const Api= async(method,url,data,res)=>{
if(method=='GET')await  Axios.get(url,data).then((response)=>{res= {...response};}) .catch((error) => { console.log(error);});
else if(method=='POST')await  Axios.post(url,data).then((response)=>{res= {...response};}) .catch((error) => { console.log(error);});     
return res;
}
// export  LoadGrids;
// module.export Api();
