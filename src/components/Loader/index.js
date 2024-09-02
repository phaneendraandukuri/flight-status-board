import "./loader.css";

export const Loader = ({ size = 36 }) => {
  const style = {
    width: size,
    height: size,
  };
  return (
    <div data-testid="loader-spinner" className="spinner" style={style}></div>
  );
};
