import React from "react";
import { BookmarksContextProvider } from "./src/context/Bookmarks.context";
import { SettingsContextProvider } from "./src/context/Settings.context";
import { ThemeContextProvider } from "./src/context/Theme.context";
import { Routes } from "./src/navigation/Routes";

const App = () => {
  return (
    <ThemeContextProvider>
      <SettingsContextProvider>
        <BookmarksContextProvider>
          <Routes />
        </BookmarksContextProvider>
      </SettingsContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
