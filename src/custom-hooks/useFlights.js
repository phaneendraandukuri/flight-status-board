import { useEffect, useState } from "react";

export const useFlights = () => {
  const [flights, setFlights] = useState([]);
  useEffect(() => {
    fetch("https://flight-status-mock.core.travelopia.cloud/flights")
      .then((res) => res.json())
      .then(setFlights);
  }, []);
  return flights;
};
