import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Components/Navbar_Components/Main";
// import { HomePage } from "./Home";
import { HomePage } from './Components/Navbar_Components/Home'
import Contact from "./Components/Navbar_Components/Contact";
import About from "./Components/Navbar_Components/About";
import SideBar from "./Components/Navbar_Components/Sidebar";
import Profile from "./Components/SideBar Components/Profile";
import Register from "./Components/SideBar Components/Regsiter";
import Categories from "./Components/SideBar Components/Categories";
import Setting from "./Components/Setting";
import { CounterApp } from "../Counterapp_props_state/CounterApp"
import DashBoard from "./Components/SideBar Components/DashBoard";
import IndexComponent from '../30-09-24/IndexComponent'
import ListAndKeys from "../30-09-24/Listkeys";
import ControlledComponent from "../05-10-24/ControlledComponent";
const NestedRouter = () => {
  return (
    <div>
      <div>
        <Routes>

          <Route path="/" element={<IndexComponent />} />

          <Route path="/nav" element={<Main />}>
            <Route index element={<HomePage />} />
            <Route path="/nav/about" Component={About} />
            <Route path="/nav/Map" element={<ListAndKeys />} />
            <Route path="/nav/Map" element={<ListAndKeys />} />
            <Route path="/nav/Controlcomp" element={<ControlledComponent />}/>
              <Route path="/nav/sidebar" element={<SideBar />}>

                <Route index element={<DashBoard />} />
                <Route path="/nav/sidebar/profile" element={<Profile />} />
                <Route path="/nav/sidebar/register" element={<Register />} />
                <Route path="/nav/sidebar/categories" element={<Categories />} />
              </Route>
              <Route path="/nav/contact" element={<Contact />} />
            </Route>


            {/* //dynamic route */}
            <Route path="/setting/:sampleid" element={<Setting />} />
            {/* //Normal route */}
            <Route path="/function" element={<CounterApp />} />


            <Route path="*" element={<h1>Page not Found 404</h1>} />
        </Routes>
      </div>
    </div>
  );
};

export default NestedRouter;
