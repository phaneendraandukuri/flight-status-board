import { Link } from "react-router-dom";
import { number, string } from "prop-types";
import { getFormattedTime } from "../../utils";

import "./flight-row.css";

export const FlightRow = ({
  id,
  flightNumber,
  airline,
  origin,
  destination,
  departureTime,
  status,
}) => {
  return (
    <Link to={`/flight/${id}`} className="flight-row">
      <span className="flight-row__field">{flightNumber}</span>
      <span className="flight-row__field">{airline}</span>
      <span className="flight-row__field">{origin}</span>
      <span className="flight-row__field">{destination}</span>
      <span className="flight-row__field">
        {getFormattedTime(departureTime)}
      </span>
      <span className="flight-row__field">{status}</span>
    </Link>
  );
};

FlightRow.propTypes = {
  id: number,
  flightNumber: string,
  airline: string,
  origin: string,
  destination: string,
  departureTime: string,
  status: string,
};
