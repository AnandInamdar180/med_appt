import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Landing_Page from "./Components/Landing_Page/Landing_Page";
import Login from "./Components/Login/Login";
import Sign_Up from "./Components/Sign_Up/Sign_Up";
import InstantConsultation from "./Components/InstantConsultationBooking/InstantConsultation";
import BookingConsultation from "./Components/BookingConsultation";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
      <Route
  path="/instant-consultation"
  element={<InstantConsultation />}
/>
        <Route path="/" element={<Landing_Page />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Sign_Up />} />
        <Route
  path="/booking-consultation"
  element={<BookingConsultation />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;