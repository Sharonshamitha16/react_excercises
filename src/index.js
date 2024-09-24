import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { BrowserRouter } from 'react-router-dom'
import RouterEx from './RouterEx';
import { RouterClassEx } from './RouterClassEx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> 
   {/* <App /> */}



   <RouterEx/>
   {/* <RouterClassEx/> */}



   
   </BrowserRouter>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);



