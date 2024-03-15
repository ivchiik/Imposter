import { Dimensions, Platform } from "react-native";

export const colors = {
  mainColor: "#343A40",
  secondary: "#FF6F61",
  backgroundColor: "#36454F",
  textWhite: "#F8F9FA",
  creamWhite: "#FFFDD0",
  btnColorGreen: "#50C878",
  btnColorPurple: "#C8A2C8",
  cardLigthGray: "#8C8C8C",
};

export const IS_IOS = Platform.OS === "ios";
export const WIDTH = Dimensions.get("screen").width;
