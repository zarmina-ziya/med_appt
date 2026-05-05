import React, { useState } from 'react';
import './AppointmentForm.css'; // Make sure to import the CSS we created!

const AppointmentForm = ({ doctorName, onSubmit }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!name || !phoneNumber || !date || !timeSlot) {
      alert("Please fill out all the fields.");
      return;
    }

    onSubmit({
      doctorName,
      patientName: name,
      phoneNumber,
      appointmentDate: date,
      appointmentTime: timeSlot
    });
  };

  return (
    <form onSubmit={handleFormSubmit} className="appointment-form-container">
      <div className="form-group">
        <label>Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter your name"
          required 
        />
      </div>

      <div className="form-group">
        <label>Phone Number:</label>
        <input 
          type="tel" 
          value={phoneNumber} 
          onChange={(e) => setPhoneNumber(e.target.value)} 
          placeholder="Enter phone number"
          required 
        />
      </div>

      <div className="form-group">
        <label>Date of Appointment:</label>
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          required 
          min={new Date().toISOString().split("T")[0]} // Blocks past dates
        />
      </div>

      <div className="form-group">
        <label>Book Time Slot:</label>
        <select 
          value={timeSlot} 
          onChange={(e) => setTimeSlot(e.target.value)} 
          required
        >
          <option value="">Select a time slot</option>
          <option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
          <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
          <option value="2:00 PM - 3:00 PM">2:00 PM - 3:00 PM</option>
          <option value="4:00 PM - 5:00 PM">4:00 PM - 5:00 PM</option>
        </select>
      </div>

      <button type="submit" className="book-now-btn">Book Now</button>
    </form>
  );
};

export default AppointmentForm;