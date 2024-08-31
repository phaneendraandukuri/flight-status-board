import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const FlightDetail = () => {
  const { id } = useParams();
  const [flight, setFlight] = useState({});

  useEffect(() => {
    fetch(`https://flight-status-mock.core.travelopia.cloud/flights/${id}`)
      .then((res) => res.json())
      .then(setFlight);
  }, [id]);

  return (
    <div>
      <h2>Flight Details for {flight.flightNumber}</h2>
      <p>Airline: {flight.airline}</p>
      <p>Origin: {flight.origin}</p>
      <p>Destination: {flight.destination}</p>
      <p>Departure Time: {flight.departureTime}</p>
      <p>Status: {flight.status}</p>
    </div>
  );
};
