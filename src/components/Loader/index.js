import React from "react";
import "./loader.css";

export const Loader = ({ size = 36, color = "#5b0fff", speed = 1 }) => {
  const style = {
    width: size,
    height: size,
    borderColor: `rgba(0, 0, 0, 0.1)`,
    borderLeftColor: color,
    animationDuration: `${speed}s`,
    margin: "36px auto",
  };
  return (
    <div>
      <div className="spinner" style={style}></div>
      <div style={{ textAlign: "center" }}>Loading Flight</div>
    </div>
  );
};
