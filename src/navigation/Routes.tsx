import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { CustomDarkTheme } from "../theme";
import { MainStack } from "./MainStack";
import { OnboardingStack } from "./OnboardingStack";
import { SettingsContext } from "../context/Settings.context";
import { ThemeContext } from "../context/Theme.context";

export const Routes = () => {
  const { isFirstVisit } = useContext(SettingsContext);
  const { isDarkTheme, theme } = useContext(ThemeContext);
  return (
    <>
      <NavigationContainer theme={theme}>
        {isFirstVisit ? <OnboardingStack /> : <MainStack />}
      </NavigationContainer>
      <StatusBar style={isDarkTheme ? "light" : "dark"} />
    </>
  );
};
