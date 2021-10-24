import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { CustomDarkTheme } from "../theme";
import { MainTabs } from "./MainTabs";

export const Routes = () => {
  return (
    <>
      <NavigationContainer theme={CustomDarkTheme}>
        <MainTabs />
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
};
