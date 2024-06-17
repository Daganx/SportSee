import React from "react";
import logo from "../../assets/images/header/logo.svg";
import "./navbar.css";

export default function Navbar() {
  return (
    <header className="navbar navbar-top">
      <img src={logo} alt="Logo of SportSee" />
      <nav>
        <ul>
          <li>
            <a href="#">Accueil</a>
          </li>
          <li>
            <a href="#">Profil</a>
          </li>
          <li>
            <a href="#">Réglages</a>
          </li>
          <li>
            <a href="#">Communauté</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
