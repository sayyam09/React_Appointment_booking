import React from 'react';
import { Link } from 'react-router-dom';



function Header(){
    return(
        <header >
        <h2 className="heading">Doctor's Appointment Booking Portal</h2>
        <div className="bar">
            <Link  to="/" >Home</Link>
            <Link  to="/aboutUs" >About Us</Link>
            <Link  to="/contactUs" >Contact Us</Link>
            <Link  to="/patientlist" >Patient List</Link>
          </div>
    </header>

    )    
}

export default Header;