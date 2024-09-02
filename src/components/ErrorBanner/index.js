import "./error-banner.css";

export const ErrorBanner = ({ message }) => {
  return (
    <div className="error-banner">
      <p>{message || "Something went wrong. Please try again later."}</p>
    </div>
  );
};
