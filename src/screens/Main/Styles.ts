import { StyleSheet } from "react-native";
import { colors } from "constants/index";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapper: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
  },

  btnWrapper: {
    gap: 30,
    marginBottom: 25,
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
});
