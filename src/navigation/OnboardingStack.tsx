import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import WelcomeScreen from "../screens/Onboarding/WelcomeScreen";
import CategoriesSelectionScreen from "../screens/Onboarding/CategoriesSelectionScreen";
import CountrySelectionScreen from "../screens/Onboarding/CountrySelectionScreen";

export type OnboardingStackParams = {
  WelcomeScreen: undefined;
  CategoriesSelectionScreen: undefined;
  CountrySelectionScreen: undefined;
};

export type OnboardingStackNavProps<T extends keyof OnboardingStackParams> = {
  navigation: NativeStackNavigationProp<OnboardingStackParams, T>;
  route: RouteProp<OnboardingStackParams, T>;
};

const Stack = createNativeStackNavigator<OnboardingStackParams>();

export const OnboardingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}
    >
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen
        name="CategoriesSelectionScreen"
        component={CategoriesSelectionScreen}
      />
      <Stack.Screen
        name="CountrySelectionScreen"
        component={CountrySelectionScreen}
      />
    </Stack.Navigator>
  );
};
