import { number, string } from "prop-types";

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
    <tr>
      <td>{id}</td>
      <td>{flightNumber}</td>
      <td>{airline}</td>
      <td>{origin}</td>
      <td>{destination}</td>
      <td>{departureTime}</td>
      <td>{status}</td>
    </tr>
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
