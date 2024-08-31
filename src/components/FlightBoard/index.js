import { useFlights } from "../../custom-hooks/useFlights";
import { BoardHeader, FlightRow } from "..";
import withFlightData from "../../HOC/withFlightData";

const FlightBoardBase = ({ data: flights }) => {
  return (
    <table>
      <BoardHeader />
      <tbody>
        {flights.map((flight) => (
          <FlightRow key={flight.id} {...flight} />
        ))}
      </tbody>
    </table>
  );
};

export const FlightBoard = withFlightData(FlightBoardBase, useFlights);
