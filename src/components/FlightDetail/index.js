import { Link } from "react-router-dom";
import { useFlightById } from "../../custom-hooks/useFlights";
import withFlightData from "../../HOC/withFlightData";
import { getFormattedTime } from "../../utils";

import "./flight-detail.css";

const FlightDetailBase = ({ data: flight = {} }) => {
  return (
    <div className="flight-detail-card">
      <h2 className="flight-detail-card__number">
        Flight Details for {flight?.flightNumber}
      </h2>
      <p className="flight-detail-card__detail">Airline: {flight?.airline}</p>
      <p className="flight-detail-card__detail">Origin: {flight?.origin}</p>
      <p className="flight-detail-card__detail">
        Destination: {flight?.destination}
      </p>
      <p className="flight-detail-card__detail">
        Departure Time: {getFormattedTime(flight?.departureTime)}
      </p>
      <p className="flight-detail-card__detail">Status: {flight?.status}</p>
      <Link to={"/"} className="flight-detail-card__link">
        Go back to All Flights
      </Link>
    </div>
  );
};

export const FlightDetail = withFlightData(FlightDetailBase, useFlightById);
