import { Link, useParams } from "react-router-dom";
import { useFlightById } from "../../custom-hooks/useFlights";

export const FlightDetail = () => {
  const { id } = useParams();
  const { flight } = useFlightById(id);
  return (
    <div>
      <h2>Flight Details for {flight.flightNumber}</h2>
      <p>Airline: {flight.airline}</p>
      <p>Origin: {flight.origin}</p>
      <p>Destination: {flight.destination}</p>
      <p>Departure Time: {new Date(flight.departureTime).toDateString()}</p>
      <p>Status: {flight.status}</p>
      <Link to={"/"}>Go back to homepage</Link>
    </div>
  );
};
