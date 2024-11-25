import React from 'react';
import "./Dashboard.scss"
import SideBar from '../../components/SideBar/SideBar';
import NavBar from '../../components/NavBar/Navbar';
import { Navbar,Form, FormControl, Button } from 'react-bootstrap';



function Dashboard() {
  return (
    <div className="d-flex">
      <SideBar/>
      <div className="content">
        <div className='container'>
        <h1>Welcome to Pathwise</h1>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
