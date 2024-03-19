import { StyleSheet } from "react-native";
import { colors } from "constants/index";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    position: "absolute",
    marginTop: 25,
    zIndex: 99,
  },

  carouselContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },

  carouselWrapper: {
    flex: 1,
    alignItems: "center",
  },

  title: {
    color: colors.textWhite,
    fontSize: 22,
    fontWeight: "700",
    marginTop: 20,
  },

  textWrapper: {
    width: 300,
  },

  text: {
    color: colors.textWhite,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    marginTop: 20,
  },

  dotStyle: {
    backgroundColor: colors.creamWhite,
    width: 10,
    height: 10,
    borderRadius: 10,
  },

  btn: {
    marginBottom: 30,
    alignSelf: "center",
  },
});
