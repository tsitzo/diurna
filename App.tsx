import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BookmarksContextProvider } from "./src/context/Bookmarks.context";
import { SettingsContextProvider } from "./src/context/Settings.context";
import { ThemeContextProvider } from "./src/context/Theme.context";
import { Routes } from "./src/navigation/Routes";

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeContextProvider>
        <SettingsContextProvider>
          <BookmarksContextProvider>
            <Routes />
          </BookmarksContextProvider>
        </SettingsContextProvider>
      </ThemeContextProvider>
    </SafeAreaProvider>
  );
};

export default App;
