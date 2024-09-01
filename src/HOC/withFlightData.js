import React from "react";
import { Loader } from "../components";

const withFlightData = (WrappedComponent, dataFetcher) => {
  return (props) => {
    const { data, loading, error } = dataFetcher();

    if (loading) {
      return <Loader />;
    }

    if (error) {
      return <div>Error loading flight data: {error.message}</div>;
    }

    return <WrappedComponent {...props} data={data} />;
  };
};

export default withFlightData;
