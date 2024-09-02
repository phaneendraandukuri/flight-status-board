import { Link } from "react-router-dom";
import { useFlightById } from "../../custom-hooks/useFlights";
import withFlightData from "../../HOC/withFlightData";
import { getFormattedTime } from "../../utils";
import COLORS from "../../config/flight-status-colors";

import "./flight-detail.css";

const FlightDetailBase = ({ data: flight }) => {
  return (
    <div className="flight-detail" style={COLORS[flight.status]}>
      <h2 className="flight-detail__number">
        Flight Details for {flight?.flightNumber}
      </h2>
      <div className="flight-detail-card">
        <p className="flight-detail-card__detail">
          Airline: <span>{flight?.airline}</span>
        </p>
        <p className="flight-detail-card__detail">
          Origin: <span>{flight?.origin}</span>
        </p>
        <p className="flight-detail-card__detail">
          Destination: <span>{flight?.destination}</span>
        </p>
        <p className="flight-detail-card__detail">
          Departure Time: <span>{getFormattedTime(flight?.departureTime)}</span>
        </p>
        <p className="flight-detail-card__detail">
          Status: <span>{flight?.status}</span>
        </p>
      </div>
      <Link to={"/"} className="flight-detail-card__link">
        Go back to all flights
      </Link>
    </div>
  );
};

export const FlightDetail = withFlightData(FlightDetailBase, useFlightById);
