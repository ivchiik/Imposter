export enum ScreenRoutes {
  MAIN = "MAIN",
  FAQ = "FAQ",
  TRANSLATE = "TRANSLATE",
  PLAYGAME = "PLAYGAME",
  OPTIONS = "OPTIONS",
  TIMER = "TIMER",
  ONBOARDING = "ONBOARDING",
  PACKS = "PACKS",
  WORDSCREEN = "WORDSCREEN",
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
  PLAYGAME: undefined;
  OPTIONS: undefined;
  TIMER: undefined;
  ONBOARDING: undefined;
  PACKS: undefined;
  WORDSCREEN: undefined;
}
