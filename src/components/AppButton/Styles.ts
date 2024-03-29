import { StyleSheet } from "react-native";
import { WIDTH, colors } from "constants/index";

export const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#FF6F61",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    height: 45,
    width: WIDTH - 25,
  },

  btnText: {
    color: "white",
    fontSize: 14,
    fontWeight: "700",
  },
});
