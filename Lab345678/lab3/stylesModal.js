import { StyleSheet } from "react-native";

export const stylesModal = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  decorTextShow: {
    backgroundColor: "green",
    padding: 10,
    color: "white",
    borderRadius: 10,
    fontWeight: "bold",
    fontSize: 14,
  },
  styleModal: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
