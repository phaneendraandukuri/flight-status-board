import React from "react";
import "./errorBanner.css";

export const ErrorBanner = ({ message }) => {
  return (
    <div className="error-banner">
      <p>{message}</p>
    </div>
  );
};
