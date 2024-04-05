import { StyleSheet } from "react-native";
import { colors } from "constants/index";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  list: {
    height: 350,
    marginTop: 10,
  },

  line: {
    backgroundColor: colors.cardLigthGray,
    height: 0.5,
    marginVertical: 10,
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
