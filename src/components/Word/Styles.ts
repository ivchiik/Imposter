import { StyleSheet } from "react-native";
import { colors } from "constants/index";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginHorizontal: 10,
  },

  word: {
    color: colors.textWhite,
    fontSize: 15,
    fontWeight: "400",
  },
});
