import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Styles/Media.css";
import "./Styles/Main.css";
import Home from "./Pages/HomePage/Home";
import Register from "./Pages/RegisterPage/Register";
import LoginPage from "./Pages/LoginPage/Login";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/profile" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
