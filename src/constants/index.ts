import { Dimensions, Platform } from "react-native";

export const colors = {
  mainColor: "#343A40",
  secondary: "#FF6F61",
  textWhite: "#F8F9FA",
  creamWhite: "#FFFDD0",
};

export const IS_IOS = Platform.OS === "ios";
export const WIDTH = Dimensions.get("screen").width;