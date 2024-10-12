import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import RouterEx from './RouterEx';
import { RouterClassEx } from './RouterClassEx';
import NestedRouter from './26-09-24/NestedRouter';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> 

   {/* <RouterEx/> */}
   <RouterClassEx/>
{/* <NestedRouter/> */}
   </BrowserRouter>
);



