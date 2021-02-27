import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "#ECEBED",
  },
  button: {
    borderWidth: 1,
    borderColor: "#676767",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  value: {
    marginHorizontal: 20,
    fontSize: 16,
  },
  sign: {
    fontSize: 20,
    color: "#474747",
  },
});

export default styles;
