import { ErrorBanner, Loader } from "../components";

const withFlightData = (WrappedComponent, dataFetcher) => {
  return (props) => {
    const { data, loading, error } = dataFetcher();

    if (loading) {
      return <Loader />;
    }

    if (error) {
      return (
        <ErrorBanner
          message={"⚠︎ Oops! unable to fetch the flights at the moment"}
        />
      );
    }

    return <WrappedComponent {...props} data={data} />;
  };
};

export default withFlightData;
