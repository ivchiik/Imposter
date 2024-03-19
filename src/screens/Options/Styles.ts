import { StyleSheet } from "react-native";
import { colors } from "constants/index";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },

  counterContainer: {
    alignItems: "center",
  },

  playersText: {
    color: colors.secondary,
    fontSize: 30,
    fontWeight: "700",
  },

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

  btnWrapper: {
    gap: 30,
    marginBottom: 30,
  },

  packBtn: {
    borderRadius: 25,
    height: 50,
  },

  timerBtn: {
    backgroundColor: colors.btnColorPurple,
    borderRadius: 25,
    height: 50,
  },
});
