import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./common/SideBar";





function Layout() {
  return (
    <>
    <SideBar />
    <Outlet />
    </>
  )
}

export default Layout

