import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import DataContextProvider from "./context/DataContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </MantineProvider>
  </React.StrictMode>
);
