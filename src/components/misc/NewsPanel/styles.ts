import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: { flex: 1, margin: 15, borderRadius: 10, overflow: "hidden" },
  titleWrapper: { width: "80%" },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  bottomCard: { padding: 15, justifyContent: "space-between" },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
