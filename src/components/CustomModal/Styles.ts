import { StyleSheet } from "react-native";
import { WIDTH, colors } from "constants/index";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  insideContainer: {
    backgroundColor: colors.backgroundColor,
    position: "absolute",
    top: "40%",
    width: 300,
    height: 175,
    padding: 12,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
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
    height: 35,
    width: WIDTH - 100,
    borderRadius: 12,
  },

  btnText: {
    fontSize: 13,
  },
});
