import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 600,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    fontSize: 80,
    fontWeight: "800",
    lineHeight: 80,
    color: "white",
    width: "50%",
    marginLeft: 25,
  },
  button: {
    backgroundColor: "#fff",
    width: 200,
    height: 40,
    marginLeft: 25,
    marginTop: 25,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  searchButton: {
    flexDirection: "row",
    backgroundColor: "#fff",
    height: 60,
    marginHorizontal: 15,
    width: Dimensions.get("screen").width - 30,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 20,
    zIndex: 100,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
