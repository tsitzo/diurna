import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    marginHorizontal: 15,
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  imageContainer: {
    flex: 1 / 6,
    justifyContent: "center",
    alignItems: "center",
  },
  image: { width: "100%", aspectRatio: 1 },
  placeholderImage: { width: 40, height: 40 },
  infoContainer: { flex: 4.3 / 6, marginLeft: 10 },
  bookmarkButtonContainer: {
    flex: 0.7 / 6,
    justifyContent: "center",
    alignItems: "center",
  },
});
