import { colors } from "constants/index";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  list: {
    height: 350,
    marginBottom: 30,
  },

  line: {
    backgroundColor: colors.cardLigthGray,
    height: 0.5,
    marginVertical: 5,
  },

  container: {
    marginTop: 40,
    alignItems: "center",
  },
});
