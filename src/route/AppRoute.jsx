import React from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Login from '../pages/login/login';
import Home from "../pages/home";
import Page1 from "../pages/page1/page1";
import Booknow from "../pages/Booknow/booknow";

export default function AppRoute() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/Page1" element={<Home/>}/>
            <Route path="/Booknow" element={<Booknow/>}/>
            <Route path="/Login" element={<Page1/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
