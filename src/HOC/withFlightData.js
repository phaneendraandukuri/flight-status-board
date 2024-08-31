import React from "react";

const withFlightData = (WrappedComponent, dataFetcher) => {
  return (props) => {
    const { data, loading, error } = dataFetcher();

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error loading flight data: {error.message}</div>;
    }

    return <WrappedComponent {...props} data={data} />;
  };
};

export default withFlightData;
