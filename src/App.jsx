import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./Components/Landing_Page/LandingPage";
import SignUp from "./Components/Sign_Up/Sign_Up";
import Login from "./Components/Login/Login";
import BookingConsultation from "./Components/BookingConsultation";
// Import the Notification component
import Notification from "./Components/Notification/Notification";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Wrap the routes with Notification. 
          Note: Notification component already contains <Navbar />, 
          so we don't need to add it here separately.
        */}
        <Notification>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/booking-consultation" element={<BookingConsultation />} />
          </Routes>
        </Notification>
      </BrowserRouter>
    </div>
  );
}

export default App;