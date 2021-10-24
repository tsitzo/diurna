import React from "react";
import { CategoriesContextProvider } from "./src/context/Categories.context";
import { CountryContextProvider } from "./src/context/Country.context";
import { Routes } from "./src/navigation/Routes";

const App = () => {
  return (
    <CountryContextProvider>
      <CategoriesContextProvider>
        <Routes />
      </CategoriesContextProvider>
    </CountryContextProvider>
  );
};

export default App;
