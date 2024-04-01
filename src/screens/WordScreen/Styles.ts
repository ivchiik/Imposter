import { StyleSheet } from "react-native";
import { colors } from "constants/index";

export const styles = StyleSheet.create({
  list: {
    height: 350,
    marginBottom: 30,
  },

  line: {
    backgroundColor: colors.cardLigthGray,
    height: 0.5,
    marginVertical: 10,
  },

  container: {
    marginTop: 40,
    alignItems: "center",
  },
});
