import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notification.css';

const Notification = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
  // State to determine if the notification should be visible
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
    }

    // Logic to hide notification if no appointment exists or was canceled
    // In a real app, you'd listen for a "cancel" event or check if localStorage was cleared
    if (!storedAppointmentData) {
        setShowNotification(false);
    }
  }, []);

  return (
    <div>
      <Navbar />
      {children}
      
      {/* Display only if logged in, data exists, and showNotification is true */}
      {isLoggedIn && appointmentData && showNotification && (
        <div className="notification-container">
          <div className="appointment-card">
            <div className="appointment-card__content">
              <h3 className="appointment-card__title">Appointment Details</h3>
              <p><strong>Doctor:</strong> {doctorData?.name}</p>
              <p><strong>Speciality:</strong> {doctorData?.speciality}</p>
              <p><strong>Name:</strong> {appointmentData?.name}</p>
              <p><strong>Phone Number:</strong> {appointmentData?.phoneNumber}</p>
              <p><strong>Date of Appointment:</strong> {appointmentData?.date}</p>
              <p><strong>Time Slot:</strong> {appointmentData?.time}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;