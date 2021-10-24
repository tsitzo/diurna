import React from "react";

import { CountryContextProvider } from "./src/context/Country.context";
import { Routes } from "./src/navigation/Routes";

const App = () => {
  return (
    <CountryContextProvider>
      <Routes />
    </CountryContextProvider>
  );
};

export default App;
