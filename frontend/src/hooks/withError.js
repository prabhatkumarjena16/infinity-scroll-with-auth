import * as React from "react";
import ErrorPage from "../components/ErrorPage";
import { ErrorBoundary } from "react-error-boundary";

const withError = (Component) => (props) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <Component {...props} />
    </ErrorBoundary>
  );
};

export default withError;
