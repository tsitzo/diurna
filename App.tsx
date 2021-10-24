import React from "react";
import { SettingsContextProvider } from "./src/context/Settings.context";
import { Routes } from "./src/navigation/Routes";

const App = () => {
  return (
    <SettingsContextProvider>
      <Routes />
    </SettingsContextProvider>
  );
};

export default App;
