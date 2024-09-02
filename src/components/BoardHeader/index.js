import "./board-header.css";

export const BoardHeader = () => {
  return (
    <div className="board-header">
      <span className="board-header__field">Flight Number</span>
      <span className="board-header__field">Airline</span>
      <span className="board-header__field">Origin</span>
      <span className="board-header__field">Destination</span>
      <span className="board-header__field">Departure Time</span>
      <span className="board-header__field">Status</span>
    </div>
  );
};
