import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    marginHorizontal: 15,
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1 / 6,
    justifyContent: "center",
    alignItems: "center",
  },
  image: { width: "100%", aspectRatio: 1 },
  placeholderImage: { width: 40, height: 40 },
  infoContainer: { flex: 4 / 6, marginLeft: 10 },
  bookmarkButtonContainer: {
    flex: 1 / 6,
    justifyContent: "center",
    alignItems: "center",
  },
});
