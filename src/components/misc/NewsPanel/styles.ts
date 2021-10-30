import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 15,
    marginVertical: 30,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  titleWrapper: { width: "80%" },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  bottomCard: { padding: 15, justifyContent: "space-between" },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
