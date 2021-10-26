import React from "react";
import { BookmarksContextProvider } from "./src/context/Bookmarks.context";
import { SettingsContextProvider } from "./src/context/Settings.context";
import { Routes } from "./src/navigation/Routes";

const App = () => {
  return (
    <SettingsContextProvider>
      <BookmarksContextProvider>
        <Routes />
      </BookmarksContextProvider>
    </SettingsContextProvider>
  );
};

export default App;
