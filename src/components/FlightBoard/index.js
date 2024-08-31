import { FlightRow } from "../FlightRow";
import { useFlights } from "../../custom-hooks/useFlights";
import { BoardHeader } from "../BoardHeader";

export const FlightBoard = () => {
  const { flights, loading, error } = useFlights();

  if (loading) {
    return <div>Loading flights...</div>;
  }

  if (error) {
    return <div>Error loading flights: {error.message}</div>;
  }

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
