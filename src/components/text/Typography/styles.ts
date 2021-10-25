import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root: { letterSpacing: 0 },
  xs: { fontSize: 12 },
  sm: { fontSize: 14 },
  md: { fontSize: 18, fontWeight: "600" },
  lg: { fontSize: 22, fontWeight: "700" },
  xl: { fontSize: 26, fontWeight: "700" },
  selectionTile: {
    fontSize: 14,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  cardTitle: { fontWeight: "700" },
  fabText: {
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    textShadowColor: "#000",
    fontWeight: "700",
  },
});
