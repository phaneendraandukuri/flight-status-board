import { useFlights } from "../../custom-hooks/useFlights";
import { BoardHeader, FlightRow } from "..";
import withFlightData from "../../HOC/withFlightData";

import "./flight-board.css";

const FlightBoardBase = ({ data: flights = [] }) => {
  return (
    <div className="flight-board">
      <BoardHeader />
      <div className="flight-rows">
        {flights.map((flight) => (
          <FlightRow key={flight.id} {...flight} />
        ))}
      </div>
    </div>
  );
};

export const FlightBoard = withFlightData(FlightBoardBase, useFlights);
