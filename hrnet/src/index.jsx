/**
 * Entry point of the application.
 * Renders the root component and initializes the application.
 * @module index
 */
import { StrictMode } from "react";

import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store/store";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
