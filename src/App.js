import React from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/home/Home";
import "./styles/app.css"
import Profile from "./components/profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./components/home/Post";
import SideBar from "./components/common/SideBar";
import Login_register from "./components/Login_register";
import Layout from "./components/Layout";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
    
      <Routes>
        
      <Route path="/" element={<Home />}></Route>
      <Route path="/" element={<SideBar />}></Route>
    


<Route path="/profile" element={<Profile />}></Route>
<Route path="/login_register" element={<Login_register />}></Route>
<Route path="/login" element={<Login />}></Route>
<Route path="/Register" element={<Register />}></Route>


      </Routes>
      </BrowserRouter>

        
    </div>
  );
}

export default App;
