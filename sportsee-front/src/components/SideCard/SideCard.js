import React from "react";
import PropTypes from "prop-types";
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

SideCard.propTypes = {
  icon: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default SideCard;
