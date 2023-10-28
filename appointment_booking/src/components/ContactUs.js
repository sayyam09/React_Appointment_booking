import React, { useState } from 'react';
//import './ContactUs.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setSubmitted(true);

  };

  return (
    <div className='main-content_contact'>
      <div className='contact'>
        <h2>Contact Us</h2>
        {submitted ? (
          <p>Thank you for your submission! We'll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className='form-group_contact'>
              <label htmlFor='name'>Name:</label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='form-group_contact'>
              <label htmlFor='email'>Email:</label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='form-group_contact'>
              <label htmlFor='message'>Message:</label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type='submit'>Submit</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactUs;
