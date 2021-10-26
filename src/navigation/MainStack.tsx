import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { MainTabs } from "./MainTabs";

import SearchResultsScreen from "../screens/Main/SearchResultsScreen";
import SearchResultsByCategoryScreen from "../screens/Main/SearchResultsByCategoryScreen";
import SettingsSelectCountryScreen from "../screens/Main/SettingsSelectCountryScreen";
import SettingsSelectCategoriesScreen from "../screens/Main/SettingsSelectCategoriesScreen";

export type MainStackParams = {
  MainTabs: undefined;
  SearchResultsScreen: { query: string };
  SearchResultsByCategoryScreen: { category: string };
  SettingsSelectCountryScreen: { headerTitle: string };
  SettingsSelectCategoriesScreen: { headerTitle: string };
};

export type MainStackNavProps<T extends keyof MainStackParams> = {
  navigation: NativeStackNavigationProp<MainStackParams, T>;
  route: RouteProp<MainStackParams, T>;
};

const Stack = createNativeStackNavigator<MainStackParams>();

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SearchResultsScreen"
        component={SearchResultsScreen}
        options={({ route }) => ({
          headerLargeTitle: true,
          headerTransparent: true,
          headerTitle: route.params.query,
        })}
      />
      <Stack.Screen
        name="SearchResultsByCategoryScreen"
        component={SearchResultsByCategoryScreen}
        options={({ route }) => ({
          headerLargeTitle: true,
          headerTransparent: true,
          headerTitle: route.params.category,
        })}
      />

      <Stack.Group
        screenOptions={{
          headerLargeTitle: true,
          headerTransparent: true,
          presentation: "formSheet",
        }}
      >
        <Stack.Screen
          name="SettingsSelectCountryScreen"
          component={SettingsSelectCountryScreen}
          options={({ route }) => ({
            headerTitle: route.params.headerTitle,
          })}
        />
        <Stack.Screen
          name="SettingsSelectCategoriesScreen"
          component={SettingsSelectCategoriesScreen}
          options={({ route }) => ({
            headerTitle: route.params.headerTitle,
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
