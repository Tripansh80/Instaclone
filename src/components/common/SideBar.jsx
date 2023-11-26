import React from 'react'
import "../../styles/sidebar.css"
import {Link, Outlet} from 'react-router-dom'
const SideBar = () => {
  return (
    <div className='sidebarContainer'>
        <ul style={{listStyle: 'none'}}>
          <Link to="/"><li style={{marginBottom:"20px", listStyle:'none'}}><img width="120px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhthVRsc7qX-SXY1daSBCN5F1vBxIjlbziulVZn3cv&s"/></li></Link>  
            
           <Link to="/"><li style={{color: 'white',textDecoration: 'none', listStyle:'none'}} >Home</li></Link> 
            <li>Search</li>
            <li>Explore</li>
            <li>Reels</li>
            <li>Messages</li>
            <li>Notification</li>
            <li>Create</li>
           <Link to='/profile'><li style={{color: 'white',textDecoration: 'none',}} >Profile</li></Link> 
           <Link to='/login_register'><li>Login/register</li></Link>
        </ul>

      <Outlet />
    </div>
  )
}

export default SideBar
