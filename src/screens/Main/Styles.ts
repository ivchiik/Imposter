import { StyleSheet } from "react-native";
import { colors } from "constants/index";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  btnWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 70,
  },

  text: {
    color: "#FFBF00",
  },

  btnPlay: {
    borderRadius: 25,
    height: 50,
  },

  btnOptions: {
    backgroundColor: colors.btnColorPurple,
    height: 50,
    borderRadius: 25,
  },

  btnSupport: {
    backgroundColor: colors.btnColorGreen,
    height: 50,
    borderRadius: 25,
  },
});
