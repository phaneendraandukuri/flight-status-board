import { ErrorBanner, Loader } from "../components";

const withFlightData = (WrappedComponent, dataFetcher) => {
  return (props) => {
    const { data, loading, error } = dataFetcher();

    if (loading) {
      return <Loader />;
    }

    if (error) {
      return (
        <ErrorBanner message={`Error loading flight data: ${error.message}`} />
      );
    }

    return <WrappedComponent {...props} data={data} />;
  };
};

export default withFlightData;
