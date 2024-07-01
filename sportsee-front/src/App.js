import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import Sidebar from "./components/Sidebar/Sidebar.js";
import MainContainer from "./components/MainContainer/MainContainer.js";
import Profile from "./pages/Profile/Profile.js";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <MainContainer>
        <Routes>
          <Route path="/" element={<Navigate to="/profile/12" />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </MainContainer>
    </Router>
  );
};

export default App;
