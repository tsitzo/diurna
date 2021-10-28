import "@react-navigation/native";

// Override the theme in react native navigation to accept our custom theme props.
declare module "@react-navigation/native" {
  export type ExtendedTheme = {
    dark: boolean;
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      danger: string;
      background: string;
      card: string;
      text: string;
      subtext: string;
      subtext: string;
      separator: string;
      border: string;
      highlight: string;
      notification: string;
      transparent: string;
    };
  };
  export function useTheme(): ExtendedTheme;
}
