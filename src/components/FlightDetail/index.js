import { Link } from "react-router-dom";
import { useFlightById } from "../../custom-hooks/useFlights";
import withFlightData from "../../HOC/withFlightData";
import { getFormattedTime } from "../../utils";

const FlightDetailBase = ({ data: flight }) => {
  return (
    <div>
      <h2>Flight Details for {flight.flightNumber}</h2>
      <p>Airline: {flight.airline}</p>
      <p>Origin: {flight.origin}</p>
      <p>Destination: {flight.destination}</p>
      <p>Departure Time: {getFormattedTime(flight.departureTime)}</p>
      <p>Status: {flight.status}</p>
      <Link to={"/"}>Go back to homepage</Link>
    </div>
  );
};

export const FlightDetail = withFlightData(FlightDetailBase, useFlightById);
