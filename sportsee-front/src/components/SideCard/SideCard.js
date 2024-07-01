import React from "react";
import "./sidecard.css";

const SideCard = ({ icon, value, label, bgColor }) => {
  return (
    <div className="side-card">
      <div className="side-card-icon" style={{ backgroundColor: bgColor }}>
        <img src={icon} alt={label} />
      </div>
      <div className="side-card-content">
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </div>
  );
};

export default SideCard;
