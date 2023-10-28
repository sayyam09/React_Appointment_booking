import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import PatientList from './components/PatientList';
import PatientDetail from './components/PatientDetail';
import Header from './components/Header';
import Footer from './components/Footer';
import {React} from 'react';

function App(){
    return (
      <div className="App">
        <BrowserRouter>
        <Header/>
          <Routes>
              <Route path="/" element = {<Home obj={this}/>}/>
              <Route path="/aboutUs" element = {<AboutUs/>}/>
              <Route path="/contactUs" element = {<ContactUs/>}/>
              <Route path="/patientlist" element = {<PatientList obj={this}/>}/>
              <Route path="/patientlist/:patientId" element = {<PatientDetail obj={this}/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    )
  }

export default App;
