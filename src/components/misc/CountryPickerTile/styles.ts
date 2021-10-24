import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  flag: { height: 45, width: 45, marginRight: 15 },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  countryText: { fontWeight: "700" },
});
