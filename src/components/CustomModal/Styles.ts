import { StyleSheet } from "react-native";
import { WIDTH, colors } from "constants/index";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },

  insideContainer: {
    backgroundColor: colors.backgroundColor,
    position: "absolute",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    top: "40%",
    width: 300,
    height: 175,
    padding: 12,
    borderRadius: 12,
  },

  headWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  empty: {
    width: 12,
  },

  title: {
    color: colors.textWhite,
    fontSize: 18,
    fontWeight: "600",
  },

  modalFooter: {
    width: "100%",
    gap: 15,
  },

  nameInputContainer: {
    width: "100%",
    backgroundColor: colors.mainColor,
    color: colors.textWhite,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.textWhite,
  },

  nameInput: {
    padding: 8,
    color: colors.textWhite,
  },

  btn: {
    width: '100%',
    height: 35,
    borderRadius: 12,
  },

  btnText: {
    fontSize: 13,
  },
});
