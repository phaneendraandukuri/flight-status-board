import { Link } from "react-router-dom";
import { number, string } from "prop-types";

import { getFormattedTime } from "../../utils";

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
      <td>{flightNumber}</td>
      <td>{airline}</td>
      <td>{origin}</td>
      <td>{destination}</td>
      <td>{getFormattedTime(departureTime)}</td>
      <td>{status}</td>
      <td>
        <Link to={`/flight/${id}`}>View Details</Link>
      </td>
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
