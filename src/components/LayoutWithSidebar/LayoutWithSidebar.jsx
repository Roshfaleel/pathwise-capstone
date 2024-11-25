import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import "./LayoutWithSidebar.scss"

import React from 'react'

function LayoutWithSidebar() {
  return (
    <div className="sidebar-layout">
      <SideBar/>
      <main className="sidebar-layout__content">
        <Outlet/>
      </main>
    </div>
  )
}

export default LayoutWithSidebar
