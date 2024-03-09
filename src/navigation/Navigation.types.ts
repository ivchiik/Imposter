export enum ScreenRoutes {
  MAIN = "MAIN",
  FAQ = "FAQ",
  TRANSLATE = "TRANSLATE",
}

export const screenOptions = {
  headerShown: false,
  animation: "slide_from_right",
  contentStyle: { backgroundColor: "#36454F" },
};

export interface RootStackParamList {
  MAIN: undefined;
  FAQ: undefined;
  TRANSLATE: undefined;
}
