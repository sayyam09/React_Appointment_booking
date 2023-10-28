import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {addAppointment, editAppointment, editIndex} from '../actions';

function Home() {
  const [patientName, setPatientName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [appointmentType, setAppointmentType] = useState('');

  const dispatch = useDispatch();
  
  const editingIndex = parseInt(useSelector((state) => state.appointments.editingIndex));
  
  const appointments = useSelector((state) => state.appointments.appointments);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'patientName':
        setPatientName(value);
        break;
      case 'gender':
        setGender(value);
        break;
      case 'age':
        setAge(value);
        break;
      case 'phoneNumber':
        setPhoneNumber(value);
        break;
      case 'date':
        setDate(value);
        break;
      case 'time':
        setTime(value);
        break;
      case 'doctorName':
        setDoctorName(value);
        break;
      case 'appointmentType':
        setAppointmentType(value);
        break;
      default:
        break;
    }
  };
  useEffect(()=>
  {
    if(editingIndex!==-1)
    {
      setPatientName(appointments[editingIndex].patientName);
      setGender(appointments[editingIndex].gender);
      setAge(appointments[editingIndex].age);
      setPhoneNumber(appointments[editingIndex].phoneNumber);
      setDate(appointments[editingIndex].date);
      setTime(appointments[editingIndex].time);
      setDoctorName(appointments[editingIndex].doctorName);
      setAppointmentType(appointments[editingIndex].appointmentType);
    }
  },[editingIndex,appointments]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newAppointment = {
      patientName,
      gender,
      age,
      phoneNumber,
      date,
      time,
      doctorName,
      appointmentType,
    };
    if(editingIndex===-1)
    {
      dispatch(addAppointment(newAppointment));
    }
    else 
    {
      dispatch(editAppointment(editingIndex,newAppointment));
    }
    dispatch(editIndex(-1));
    setPatientName('');
    setGender('');
    setAge('');
    setPhoneNumber('');
    setDate('');
    setTime('');
    setDoctorName('');
    setAppointmentType('');
  };

  return (
    <div className='main-content2'>
      <div className="container register-form">
        <div className="form">
          <div className="note">
            <p id="title">Welcome to Gradious Doctor Appointment Booking</p>
          </div>

          <form onSubmit={handleFormSubmit}>
            <div className="form-content">
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="patientName"
                    className="form-control "
                    placeholder="Patient Name *"
                    value={patientName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <select
                    name="gender"
                    className="form-control"
                    value={gender}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>Gender</option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="age"
                    className="form-control"
                    placeholder="Age *"
                    value={age}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phoneNumber"
                    className="form-control"
                    placeholder="Phone Number *"
                    value={phoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="date"
                    name="date"
                    className="form-control"
                    placeholder="Date *"
                    value={date}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="time"
                    className="form-control "
                    placeholder="Time *"
                    value={time}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="doctorName"
                    className="form-control "
                    placeholder="Doctor Name *"
                    value={doctorName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <select
                    name="appointmentType"
                    className="form-control"
                    value={appointmentType}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>Type</option>
                    <option value="Consult">Consult</option>
                    <option value="Revisit">Revisit</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btnSubmit">
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
