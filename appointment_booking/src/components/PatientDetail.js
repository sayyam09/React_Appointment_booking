import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAppointment, editIndex } from '../actions';

function PatientDetail() {
  const { patientId } = useParams();
  const index = parseInt(patientId);
  const appointment = useSelector((state) => state.appointments.appointments[index]);
  const dispatch = useDispatch();

  if (!appointment) {
    return <div>Appointment not found</div>;
  }

  const handleDeleteClick = () => {
    dispatch(deleteAppointment(index));
  };

  const handleEditClick = () => {

    dispatch(editIndex(index));
  };

  return (
    <div className="main-content5">
      <div className="patientdetails">
        <h3 id ="heading_p_details">Patient Details</h3>
        <p className="list_of_patient_details">Name: {appointment.patientName}</p>
        <p className="list_of_patient_details">Gender: {appointment.gender}</p>
        <p className="list_of_patient_details">Age: {appointment.age}</p>
        <p className="list_of_patient_details">Phone no.: {appointment.phoneNumber}</p>
        <p className="list_of_patient_details">Appointment Date: {appointment.date}</p>
        <p className="list_of_patient_details">Slot: {appointment.time}</p>
        <p className="list_of_patient_details">Doctor: {appointment.doctorName}</p>
        <p className="list_of_patient_details">Appointment Type: {appointment.appointmentType}</p>
        <Link to="/patientlist">
          <button className="btn" onClick={handleDeleteClick}>
            Delete
          </button>
        </Link>
        <Link to="/">
          <button className="btn" onClick={handleEditClick}>Edit</button>
        </Link>
      </div>
    </div>
  );
}

export default PatientDetail;
