import { WIDTH, colors } from "constants/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  card: {
    flex: 1,
    alignItems: "center",
  },

  face: {
    backgroundColor: colors.mainColor,
    flex: 1,
    width: WIDTH - 50,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: colors.cardLigthGray,
  },

  cardFrontText: {
    color: colors.cardLigthGray,
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 28,
  },

  back: {
    backgroundColor: colors.mainColor,
    flex: 1,
    width: WIDTH - 50,
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 30,
    paddingVertical: 25,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: colors.cardLigthGray,
  },

  backWrapper: {
    flex: 1,
    width: 300,
    alignItems: "center",
    justifyContent: "space-between",
  },

  impostorText: {
    color: colors.secondary,
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 28,
  },

  impostorHint: {
    color: colors.secondary,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 18,
  },

  localText: {
    color: colors.textWhite,
    fontSize: 18,
    fontWeight: "800",
    lineHeight: 28,
  },

  localHint: {
    color: colors.textWhite,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 18,
  },
});
