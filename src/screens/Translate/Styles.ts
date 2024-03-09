import { StyleSheet } from "react-native";
import { colors } from "constants/index";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapper: {
    flex: 1,
    gap: 10,
  },

  text: {
    color: colors.textWhite,
    fontSize: 18,
    fontWeight: "800",
    paddingLeft: 12,
  },

  textPressed: {
    color: colors.secondary,
    fontSize: 18,
    fontWeight: "800",
    paddingLeft: 12,
  },

  line: {
    height: 1,
    backgroundColor: colors.creamWhite,
  },
});
