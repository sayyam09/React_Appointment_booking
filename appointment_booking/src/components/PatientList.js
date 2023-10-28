import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function PatientList(){
  const appointments = useSelector((state) => state.appointments.appointments);
    return(
        <div className="main-content4">
          <div className="patientlist">
                <h2>Patients</h2>
                 {appointments.map((appointment, index) => (
                <div key={index} className='patient'>
                    <Link to={`/patientlist/${index}`}>
                    <div><b>Patient Name:-</b> {appointment.patientName}</div>
                    <div><b>Date:-</b> {appointment.date}</div>
                    <div><b>Slot:-</b> {appointment.time}</div>
                  
                </Link>
                </div>
                )) }
          </div>
        </div>

    )    
}

export default PatientList;