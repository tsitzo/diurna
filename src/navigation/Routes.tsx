import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { CustomDarkTheme } from "../theme";
import { MainStack } from "./MainStack";
import { OnboardingStack } from "./OnboardingStack";
import { SettingsContext } from "../context/Settings.context";

export const Routes = () => {
  const { isFirstVisit } = useContext(SettingsContext);
  return (
    <>
      <NavigationContainer theme={CustomDarkTheme}>
        {isFirstVisit ? <OnboardingStack /> : <MainStack />}
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
};
