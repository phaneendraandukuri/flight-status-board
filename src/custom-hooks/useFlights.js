import { useState, useEffect } from "react";
import { FLIGHTS_STATUS_API } from "../constants";
import { useParams } from "react-router-dom";

const useFetch = (endpoint, refreshInterval = null) => {
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

    if (refreshInterval) {
      const intervalId = setInterval(() => {
        fetchData();
      }, refreshInterval);

      return () => clearInterval(intervalId);
    }

    fetchData();
    return () => {};
  }, [endpoint, refreshInterval]);

  return { data, loading, error };
};

export const useFlightById = () => {
  const { id } = useParams();
  const endpoint = `${FLIGHTS_STATUS_API}/${id}`;
  return useFetch(endpoint);
};

export const useFlights = () => {
  return useFetch(FLIGHTS_STATUS_API, 3000);
};
