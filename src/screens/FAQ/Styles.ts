import { StyleSheet } from "react-native";
import { colors } from "constants/index";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  textContainer: {
    paddingHorizontal: 15,
  },

  title: {
    color: colors.secondary,
    fontSize: 18,
    fontWeight: "800",
  },

  text: {
    color: colors.textWhite,
    fontSize: 13,
    fontWeight: "800",
    marginVertical: 10,
  },
});
