import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignUp from "./components/Login/SignUp";
import LoginForm from "./components/Login/LoginForm";
import ForgotPassword from "./components/Login/ForgotPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
