import {React} from "react";
import RectDOM from 'react-dom';
import Index from './pages/Index';
import Loader from './components/loader/Loader';
import {BrowserRouter} from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

RectDOM.render(  <BrowserRouter><Loader/><Index/><ToastContainer/></BrowserRouter>,document.getElementById('root'));
   
   
    
