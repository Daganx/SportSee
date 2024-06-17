import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import './index.css'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <main>
        <h1>Main</h1>
      </main>
      <Routes>
        <Route></Route>
      </Routes>
    </Router>
  );
};

export default App;
