import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from "./store";
import "./bootstrap.min.css";
import ErrorPage from "./components/ErrorPage";
import reportWebVitals from "./reportWebVitals";
import { ErrorBoundary } from "react-error-boundary";

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary
      FallbackComponent={ErrorPage}
      onError={() => console.log("Hello")}
    >
      <App />
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
