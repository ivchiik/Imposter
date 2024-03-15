import { StyleSheet } from "react-native";
import { colors } from "constants/index";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapper: {
    flex: 1,
    alignItems: "center",
    marginTop: 60,
  },

  picker: {
    backgroundColor: '#36454F',
    color: colors.creamWhite,
    width: 330,
    height: 215,
  },
});
