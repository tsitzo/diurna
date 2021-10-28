import {
  DefaultTheme,
  DarkTheme,
  ExtendedTheme,
} from "@react-navigation/native";

export const CustomLightTheme: ExtendedTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3BA99C",
    secondary: "rgb(0, 174, 239)",
    tertiary: "rgb(34, 31, 114)",
    danger: "rgb(208, 2, 27)",
    background: "#fff",
    card: "#f5f5f5",
    text: "rgb(0, 0, 0)",
    subtext: "rgb(102, 102, 102)",
    separator: "rgb(194, 194, 195)",
    highlight: "rgb(199, 198, 203)",
    transparent: "rgba(255, 255, 255, 0)",
  },
};

export const CustomDarkTheme: ExtendedTheme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: "#13C4A3",
    secondary: "rgb(0, 174, 239)",
    tertiary: "rgb(34, 31, 114)",
    danger: "rgb(208, 2, 27)",
    background: "#090909",
    card: "#181818",
    text: "#f5f5f5",
    subtext: "#999999",
    separator: "rgb(194, 194, 195)",
    highlight: "rgb(199, 198, 203)",
    transparent: "rgba(0,0,0,0)",
  },
};
