import { colors } from "constants/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  line: {
    backgroundColor: colors.cardLigthGray,
    height: 0.5,
    marginVertical: 5,
  },

  container: {
    alignItems: "center",
    marginBottom: 50,
  },
});
