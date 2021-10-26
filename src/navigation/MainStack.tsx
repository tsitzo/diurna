import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import { MainTabs } from "./MainTabs";
import SearchResultsScreen from "../screens/Main/SearchResultsScreen";

export type MainStackParams = {
  MainTabs: undefined;
  SearchResultsScreen: { query: string };
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
    </Stack.Navigator>
  );
};