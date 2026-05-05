import React, { useState } from 'react';
import AppointmentForm from './AppointmentForm'; // Adjust path if needed
import './DoctorCard.css'; // If you have a separate CSS file for the card

const DoctorCard = ({ name, specialty, experience, rating, image, profile }) => {
  const [showForm, setShowForm] = useState(false);

  const handleBookingSubmit = (appointmentData) => {
    // You can handle saving the booking here (e.g., sending it to a backend or state)
    console.log("Booking Confirmed:", appointmentData);
    alert(`Appointment successfully booked with ${name}!`);
    setShowForm(false); // Hide the form after booking
  };

  return (
    <div className="doctor-card">
      {/* Doctor Info Section */}
      <div className="doctor-info-container">
        <img src={image} alt={name} className="doctor-image" />
        <div className="doctor-details">
          <h2 className="doctor-name">Dr. {name}</h2>
          <p className="doctor-specialty">{specialty}</p>
          <p className="doctor-experience">{experience} years experience</p>
          <p className="doctor-profile">{profile}</p>
          <div className="doctor-ratings">
            Ratings: {"⭐".repeat(rating)}
          </div>
        </div>
      </div>

      {/* Booking Form Toggle Logic */}
      {!showForm ? (
        <button 
          className="book-appointment-btn" 
          onClick={() => setShowForm(true)}
        >
          Book Appointment
        </button>
      ) : (
        <div className="appointment-form-wrapper">
          {/* Dr. Header info printed inside the form card as shown in your image */}
          <div className="form-doctor-header">
            <h3>Dr. {name}</h3>
            <p>{specialty}</p>
            <p className="experience-subtext">{experience} years experience</p>
            <p>Ratings: {"⭐".repeat(rating)}</p>
          </div>

          <AppointmentForm 
            doctorName={name} 
            onSubmit={handleBookingSubmit} 
          />
          
          <button 
            className="cancel-booking-btn" 
            onClick={() => setShowForm(false)}
          >
            Cancel Booking
          </button>
        </div>
      )}
    </div>
  );
};

export default DoctorCard;