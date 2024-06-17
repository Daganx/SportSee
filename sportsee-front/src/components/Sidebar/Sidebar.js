import React from "react";
import icon1 from "../../assets/images/aside/icon1.svg";
import icon2 from "../../assets/images/aside/icon2.svg";
import icon3 from "../../assets/images/aside/icon3.svg";
import icon4 from "../../assets/images/aside/icon4.svg";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <aside className="navbar navbar-side">
      <nav>
        <ul>
          <li>
            <img src={icon1} alt="" />
          </li>
          <li>
            <img src={icon2} alt="" />
          </li>
          <li>
            <img src={icon3} alt="" />
          </li>
          <li>
            <img src={icon4} alt="" />
          </li>
        </ul>
      </nav>
      <p>Copyright, SportSee 2020</p>
    </aside>
  );
}
