import { array } from "prop-types";
import { FlightRow } from "../FlightRow";

export const FlightBoard = ({ flights }) => {
  return (
    <table>
      <thead>
        <th>Flight Number</th>
        <th>Airline</th>
        <th>Origin</th>
        <th>Destination</th>
        <th>Departure</th>
        <th>Time</th>
      </thead>
      <tbody>
        {flights.map((flight) => (
          <FlightRow key={flight.id} {...flight} />
        ))}
      </tbody>
    </table>
  );
};

FlightBoard.propTypes = {
  flights: array,
};
