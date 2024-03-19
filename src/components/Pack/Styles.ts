import { colors } from "constants/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 16,
  },

  name: {
    color: colors.textWhite,
    fontSize: 14,
    fontWeight: "500",
  },
});
