import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { HelmetProvider } from "react-helmet-async";

import App from "./App.jsx";
import { persistor, store } from "./app/store.js";
import { Spinner } from "./components/ui/spinner.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        <PersistGate
          persistor={persistor}
          loading={<Spinner fullScreen size="huge" />}
        >
          <App />
        </PersistGate>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>,
);
