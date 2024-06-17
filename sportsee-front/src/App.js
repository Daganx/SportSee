import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
// import user from './pages/user';
import './index.css'

const App = () => {
  return (
    <Router>
      <Navbar />
      <section className="sidebar-main-container">
        <Sidebar />
      <main className="main-container">
        <h1>Main</h1>
      </main>
      </section>
      <Routes>
        <Route>
          {/* ROUTE A METTRE POUR ACCUEIL ? */}
        
          {/* <Route path="/user/:id" element={user}> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
