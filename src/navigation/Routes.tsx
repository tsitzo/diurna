import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { CustomDarkTheme } from "../theme";
import { MainTabs } from "./MainTabs";
import { OnboardingStack } from "./OnboardingStack";

export const Routes = () => {
  const firstVisit = true;
  return (
    <>
      <NavigationContainer theme={CustomDarkTheme}>
        {firstVisit ? <OnboardingStack /> : <MainTabs />}
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
};
