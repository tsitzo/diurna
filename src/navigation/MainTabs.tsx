import React from "react";
import { RouteProp, useTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import ExploreScreen from "../screens/Main/ExploreScreen";
import HomeScreen from "../screens/Main/HomeScreen";
import SettingsScreen from "../screens/Main/SettingsScreen";

const ExploreStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const SettingsStack = createNativeStackNavigator();

const ExploreScreenStack = () => {
  return (
    <ExploreStack.Navigator
      screenOptions={{
        headerLargeTitle: true,
        headerTransparent: true,
      }}
    >
      <ExploreStack.Screen name="Explore" component={ExploreScreen} />
    </ExploreStack.Navigator>
  );
};

const HomeScreenStack = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

const SettingsScreenStack = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerLargeTitle: true,
        headerTransparent: true,
      }}
    >
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  );
};

export type MainTabsParams = {
  HomeScreen: undefined;
  ExploreScreen: undefined;
  SettingsScreen: undefined;
};

export type MainTabsNavProps<T extends keyof MainTabsParams> = {
  navigation: BottomTabNavigationProp<MainTabsParams, T>;
  route: RouteProp<MainTabsParams, T>;
};

const Tabs = createBottomTabNavigator<MainTabsParams>();

export const MainTabs = () => {
  const { colors } = useTheme();
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: colors.background, borderTopWidth: 0 },
      }}
    >
      <Tabs.Screen
        name="HomeScreen"
        component={HomeScreenStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-home" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ExploreScreen"
        component={ExploreScreenStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-search" size={22} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="SettingsScreen"
        component={SettingsScreenStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-settings" size={22} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
