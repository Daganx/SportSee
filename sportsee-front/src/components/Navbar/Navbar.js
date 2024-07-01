import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/header/logo.svg";
import "./navbar.css";

export default function Navbar() {
  return (
    <header className="navbar navbar-top">
      <img src={logo} alt="Logo of SportSee" />
      <nav>
        <ul>
          <li>
            <Link to="#">Accueil</Link>
          </li>
          <li>
            <Link to="#">Profil</Link>
          </li>
          <li>
            <Link to="#">Réglages</Link>
          </li>
          <li>
            <Link to="#">Communauté</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
