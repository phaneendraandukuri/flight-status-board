import { useState, useEffect } from "react";
import { FLIGHTS_STATUS_API } from "../constants";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(endpoint);

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};

export const useFlightById = (id) => {
  const endpoint = `${FLIGHTS_STATUS_API}/${id}`;
  const { data: flight, loading, error } = useFetch(endpoint);
  return { flight, loading, error };
};

export const useFlights = () => {
  const { data: flights, loading, error } = useFetch(FLIGHTS_STATUS_API);
  return { flights, loading, error };
};
