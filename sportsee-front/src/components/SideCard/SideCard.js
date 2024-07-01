import React from "react";
import "./sidecard.css";

const SideCard = ({ icon, value, label, bgColor }) => {
  const sideCardData = {
    icon: icon,
    value: value,
    label: label,
    bgColor: bgColor,
  };

  return (
    <div className="side-card">
      <div
        className="side-card-icon"
        style={{ backgroundColor: sideCardData.bgColor }}
      >
        <img src={sideCardData.icon} alt={sideCardData.label} />
      </div>
      <div className="side-card-content">
        <h3>{sideCardData.value}</h3>
        <p>{sideCardData.label}</p>
      </div>
    </div>
  );
};

export default SideCard;
