import React from 'react'

import {Link, NavLink } from 'react-router-dom'
import SideBar from "./common/SideBar"
import "../styles/login_register.css"
const Login_register = () => {
  return (
  <>
  
  <div id='head' style={{textAlign: "center",fontSize: "40px"}}>What you want to do login/register</div>
  <ul style={{ textAlign: "center", fontSize: "40px", listStyle: "none", padding: 0 ,color:"white"}}>
  <Link to="/login" style={{ textDecoration: "none" }}>
    <li style={{ textDecoration: "none" }}>Login</li>
  </Link>
  <Link to="/register" style={{ textDecoration: "none" }}>
    <li style={{ textDecoration: "none" }}>Register</li>
  </Link>
</ul>

<SideBar />


<Link to='/'><div style={{textAlign: "center",fontSize: "40px"}}>Back to Home</div></Link>

  
  </>
    
  )
}

export default Login_register