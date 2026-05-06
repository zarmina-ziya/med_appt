import React, { useState } from 'react';
import AppointmentFormIC from '../AppointmentFormIC/AppointmentFormIC';
import './DoctorCard.css';

const DoctorCard = ({ name, specialty, experience, rating, image, profile }) => {
  const [showForm, setShowForm] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);

  // Fallback image URL in case the provided image fails to load
  const defaultImage = "https://cdn-icons-png.flaticon.com/512/387/387561.png";

  const handleBookingSubmit = (appointmentData) => {
    setBookingDetails(appointmentData);
    setIsBooked(true);
    setShowForm(false);
  };

  const handleCancelAppointment = () => {
    setIsBooked(false);
    setBookingDetails(null);
    alert(`Appointment with Dr. ${name} has been cancelled.`);
  };

  return (
    <div className="doctor-card">
      <div className="doctor-info-container">
        {/* Main Doctor Image with Fallback Logic */}
        <div className="doctor-image-wrapper">
            <img 
              src={image || defaultImage} 
              alt={`Dr. ${name}`} 
              className="doctor-image" 
              onError={(e) => { e.target.src = defaultImage; }} 
            />
        </div>

        <div className="doctor-details">
          <h2 className="doctor-name">Dr. {name}</h2>
          <p className="doctor-specialty">{specialty}</p>
          <p className="doctor-experience">{experience} years experience</p>
          <p className="doctor-profile">{profile}</p>
          <div className="doctor-ratings">
            {/* Using a visual star display */}
            Ratings: {"⭐".repeat(rating)}
          </div>
        </div>
      </div>

      <div className="doctor-card-options-container">
        {!isBooked ? (
          <button 
            className="book-appointment-btn" 
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Close Form" : "Book Appointment"}
          </button>
        ) : (
          <div className="booked-status">
            <p className="booking-conf-text">Confirmed for {bookingDetails?.appointmentDate}</p>
            <button 
              className="cancel-appointment-btn" 
              onClick={handleCancelAppointment}
            >
              Cancel Appointment
            </button>
          </div>
        )}
      </div>

      {showForm && !isBooked && (
        <div className="appointment-form-wrapper">
          <div className="form-doctor-header">
            {/* Small image inside the form header for consistency */}
            <img 
              src={image || defaultImage} 
              alt="" 
              className="form-doctor-avatar" 
              style={{ width: '50px', borderRadius: '50%' }}
            />
            <h3>Dr. {name}</h3>
            <p>{specialty}</p>
            <p className="experience-subtext">{experience} years experience</p>
          </div>

          <AppointmentFormIC 
            doctorName={name} 
            onSubmit={handleBookingSubmit} 
          />
        </div>
      )}
    </div>
  );
};

export default DoctorCard;