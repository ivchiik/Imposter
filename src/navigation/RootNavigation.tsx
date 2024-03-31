import React from "react";
import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  FAQ,
  Main,
  OnBoarding,
  Options,
  Packs,
  PlayGame,
  Timer,
  Translate,
  WordScreen,
} from "screens";

import {
  screenOptions,
  type RootStackParamList,
  ScreenRoutes,
} from "./Navigation.types";

const Stack = createNativeStackNavigator<RootStackParamList>();
export const navigationRef = createNavigationContainerRef();

export const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName={ScreenRoutes.ONBOARDING}
      >
        <Stack.Screen
          name={ScreenRoutes.ONBOARDING}
          component={OnBoarding}
          options={{
            animation: "fade",
          }}
        />
        <Stack.Screen
          name={ScreenRoutes.MAIN}
          component={Main}
          options={{ animation: "fade" }}
        />
        <Stack.Screen
          name={ScreenRoutes.FAQ}
          component={FAQ}
          options={{
            animation: "fade",
          }}
        />
        <Stack.Screen
          name={ScreenRoutes.TRANSLATE}
          component={Translate}
          options={{
            animation: "fade",
          }}
        />
        <Stack.Screen
          name={ScreenRoutes.PLAYGAME}
          component={PlayGame}
          options={{
            animation: "fade",
          }}
        />
        <Stack.Screen
          name={ScreenRoutes.OPTIONS}
          component={Options}
          options={{
            animation: "fade",
          }}
        />
        <Stack.Screen
          name={ScreenRoutes.TIMER}
          component={Timer}
          options={{
            animation: "fade",
          }}
        />
        <Stack.Screen
          name={ScreenRoutes.PACKS}
          component={Packs}
          options={{
            animation: "fade",
          }}
        />
        <Stack.Screen
          name={ScreenRoutes.WORDSCREEN}
          component={WordScreen}
          options={{
            animation: "fade",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
