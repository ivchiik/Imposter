import { StyleSheet } from "react-native";
import { colors } from "constants/index";

export const styles = StyleSheet.create({
  numberWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  playersNumber: {
    color: colors.textWhite,
    fontSize: 28,
    fontWeight: "700",
  },
});